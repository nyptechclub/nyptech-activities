//@ts-nocheck
'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { docs, document } from "@prisma/client"
import { marked } from "marked"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Props {
  params: {
    roomname: string
  }
}

type DocsWithDocuments = docs & { documents: document[] }

export default function RoomPage({ params }: Props) {
  const router = useRouter()
  const [documentData, setDocumentData] = useState<DocsWithDocuments | null>(null)
  const [newDocName, setNewDocName] = useState("")
  const [newContent, setNewContent] = useState("")
  const [editTitleMode, setEditTitleMode] = useState<{ [key: string]: boolean }>({})
  const [editContentMode, setEditContentMode] = useState<{ [key: string]: boolean }>({})
  const [editedContent, setEditedContent] = useState<{ [key: string]: string }>({})
  const [editedRoomName, setEditedRoomName] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    if (params.roomname) {
      fetchDocuments()
    }
  }, [params.roomname])

  const fetchDocuments = async () => {
    try {
      const res = await axios.get(`/api/room/${params.roomname}/docs`)
      setDocumentData(res.data)
    } catch (err) {
      console.error("Failed to fetch documents:", err)
    }
  }

  const updateDocument = async (documentId: string, updatedRoomName: string, updatedRoomContent: string) => {
    try {
      await axios.post(`/api/room/${documentId}/docs`, {
        roomname: updatedRoomName,
        roomcontent: updatedRoomContent,
      })

      setDocumentData((prevData) => {
        if (!prevData) return prevData
        const updatedDocuments = prevData.documents.map((doc) =>
          doc.id === documentId
            ? { ...doc, roomname: updatedRoomName, roomcontent: updatedRoomContent }
            : doc
        )
        return { ...prevData, documents: updatedDocuments }
      })

      setEditTitleMode((prev) => ({ ...prev, [documentId]: false }))
      setEditContentMode((prev) => ({ ...prev, [documentId]: false }))
      setEditedContent((prev) => ({ ...prev, [documentId]: "" }))
      setEditedRoomName((prev) => ({ ...prev, [documentId]: "" }))
    } catch (err) {
      console.error("Failed to update document:", err)
    }
  }

  const deleteDocument = async (documentId: string) => {
    try {
      await axios.delete(`/api/room/${documentId}/docs`)
      setDocumentData((prevData) => {
        if (!prevData) return prevData
        const updatedDocuments = prevData.documents.filter((doc) => doc.id !== documentId)
        return { ...prevData, documents: updatedDocuments }
      })
    } catch (err) {
      console.error("Failed to delete document:", err)
    }
  }

  const enterEditTitleMode = (documentId: string, currentRoomName: string) => {
    setEditTitleMode((prev) => ({ ...prev, [documentId]: true }))
    setEditedRoomName((prev) => ({ ...prev, [documentId]: currentRoomName }))
  }

  const enterEditContentMode = (documentId: string, currentContent: string) => {
    setEditContentMode((prev) => ({ ...prev, [documentId]: true }))
    setEditedContent((prev) => ({ ...prev, [documentId]: currentContent }))
  }

  const exitEditTitleMode = (documentId: string) => {
    updateDocument(
      documentId,
      editedRoomName[documentId] || documentData?.documents.find((doc) => doc.id === documentId)?.roomname || "",
      editedContent[documentId] || documentData?.documents.find((doc) => doc.id === documentId)?.roomcontent || ""
    )
  }

  const exitEditContentMode = (documentId: string) => {
    updateDocument(
      documentId,
      editedRoomName[documentId] || documentData?.documents.find((doc) => doc.id === documentId)?.roomname || "",
      editedContent[documentId] || documentData?.documents.find((doc) => doc.id === documentId)?.roomcontent || ""
    )
  }

  const addNewDocument = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.patch(`/api/room/${params.roomname}/docs`, {
        roomname: newDocName,
        roomcontent: newContent,
      })
      setDocumentData((prevData) => ({
        ...prevData,
        documents: [...(prevData?.documents || []), response.data],
      }))
      setNewDocName("")
      setNewContent("")
    } catch (err) {
      console.error("Failed to add document:", err)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Room: {documentData?.room}</h1>
      <div className="space-y-4">
        {documentData?.documents.map((document) => (
          <div className="card" key={document.id}>
            <div className="card-body">
              <div className="card-title">
                {editTitleMode[document.id] ? (
                  <Input
                    type="text"
                    value={editedRoomName[document.id] || ""}
                    onFocus={() => enterEditTitleMode(document.id, document.roomname)}
                    onChange={(e) => setEditedRoomName((prev) => ({ ...prev, [document.id]: e.target.value }))}
                    onBlur={() => exitEditTitleMode(document.id)}
                    autoFocus
                  />
                ) : (
                  <div 
                    onClick={() => enterEditTitleMode(document.id, document.roomname)}
                    className="cursor-pointer"
                  >
                    {document.roomname}
                  </div>
                )}
              </div>
            </div>
            <div className="card-body">
              {editContentMode[document.id] ? (
                <textarea
                  value={editedContent[document.id] || ""}
                  onFocus={() => enterEditContentMode(document.id, document.roomcontent)}
                  onChange={(e) => setEditedContent((prev) => ({ ...prev, [document.id]: e.target.value }))}
                  onBlur={() => exitEditContentMode(document.id)}
                  className="w-full"
                  autoFocus
                />
              ) : (
                <div
                  onClick={() => enterEditContentMode(document.id, document.roomcontent)}
                  dangerouslySetInnerHTML={{ __html: marked(document.roomcontent) }}
                  className="prose cursor-pointer"
                />
              )}
            </div>

            {/* Delete Button */}
            <div className="card-footer">
              <Button onClick={() => deleteDocument(document.id)} className="text-red-500">
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 card">
        <div className="card-body">
          <div className="card-title">Add New Document</div>
        </div>
        <div className="card-body">
          <form onSubmit={addNewDocument} className="space-y-4">
            <div>
              <label htmlFor="newDocName" className="block text-sm font-medium text-gray-700">
                Document Name:
              </label>
              <Input
                type="text"
                id="newDocName"
                value={newDocName}
                onChange={(e) => setNewDocName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="newContent" className="block text-sm font-medium text-gray-700">
                Content:
              </label>
              <textarea
                id="newContent"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <Button type="submit">Add Document</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
