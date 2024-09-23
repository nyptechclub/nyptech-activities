"use client";
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

interface Secret {
  id: string;
  key: string;
  value: string;
}

export default function RoomPage({ params }: { params: { roomname: string } }) {
  const [password, setPassword] = useState('');
  const [envVars, setEnvVars] = useState('');
  const [secrets, setSecrets] = useState<Secret[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState<string>('');
  const [authenticated, setAuthenticated] = useState(false);
  const [roomExists, setRoomExists] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useUser();
  const router = useRouter();

  const checkRoomExists = async () => {
    const res = await fetch(`/api/room/${params.roomname}`, {
      method: 'GET',
    });

    if (res.ok) {
      setRoomExists(true);
    } else if (res.status === 404) {
      setRoomExists(false);
    }
    setLoading(false);
  };

  const authenticateRoom = async () => {
    const res = await fetch(`/api/room/${params.roomname}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      setAuthenticated(true);
      setError('');
      fetchSecrets();
    } else {
      setError('Incorrect password');
    }
  };

  const createRoom = async () => {
    const res = await fetch(`/api/room/${params.roomname}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      setAuthenticated(true);
      setError('');
    }
  };

  const submitEnvVars = async () => {
    const res = await fetch(`/api/room/${params.roomname}/secrets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: envVars,
        userId: user?.id,
        username: user?.username || user?.firstName || 'Anonymous',
      }),
    });

    if (res.ok) {
      setEnvVars('');
      fetchSecrets();
    }
  };

  const fetchSecrets = async () => {
    const res = await fetch(`/api/room/${params.roomname}/secrets`);
    const data = await res.json();
    setSecrets(data);
  };

  const handleValueClick = (id: string, currentValue: string) => {
    setEditingId(id);
    setEditingValue(currentValue);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingValue(e.target.value);
  };

  const handleValueSave = async () => {
    if (editingId) {
      const res = await fetch(`/api/room/${params.roomname}/secrets/${editingId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: editingValue }),
      });

      if (res.ok) {
        setEditingId(null);
        fetchSecrets();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      handleValueSave();
    }
  };

  useEffect(() => {
    checkRoomExists();
  }, []);

  useEffect(() => {
    if (authenticated) {
      fetchSecrets();
    }
  }, [authenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!authenticated ? (
        <div className='flex flex-col mx-auto p-5 m-5 gap-5'>
          <input
            type="password"
            placeholder="Enter room password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           className='input'/>
          {roomExists ? (
            <button onClick={authenticateRoom} className='btn'>Enter Room</button>
          ) : (
            <button onClick={createRoom}>Create Room with Password</button>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      ) : (
        <div className='flex flex-col m-5 p-5 mx-auto gap-5'>
          <h1>
            Write keys in the format of key=value or key=&quot;value&quot;
          </h1>
          <textarea
            rows={10}
            cols={50}
            placeholder="Paste your environment variables here"
            value={envVars}
            onChange={(e) => setEnvVars(e.target.value)}
          className='textarea'/>
          <button onClick={submitEnvVars} className='btn'>Submit Environment Variables</button>
          <h3>Stored Environment Variables: Click on values to edit</h3>
          <pre>
            {secrets.map((secret) => (
              <div key={secret.id}>
                {secret.key}=&quot;
                {editingId === secret.id ? (
                  <input
                    type="text"
                    value={editingValue}
                    onChange={handleValueChange}
                    onKeyDown={handleKeyDown}
                    onBlur={handleValueSave}
                    autoFocus
                  />
                ) : (
                  <span onClick={() => handleValueClick(secret.id, secret.value)}>{secret.value}</span>
                )}
                &quot;
              </div>
            ))}
          </pre>
        </div>
      )}
    </div>
  );
}
