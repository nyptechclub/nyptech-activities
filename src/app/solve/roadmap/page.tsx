import roadmap from "@/content/data/solve-roadmap.json";

export default function Page() {
  return (
    <main className={"p-4 space-y-4"}>
      {roadmap.map((activity, index) => (
        <div key={index} className={"collapse collapse-arrow bg-base-200"}>
          <input type={"radio"} name={"activities"} />
          <div className={"collapse-title bg-base-300"}>
            <div className={"font-medium text-xl"}>{activity.name}</div>
            <div className={"mt-1 font-light text-xs text-gray-400"}>{activity.date}</div>
          </div>
          <div className={"collapse-content"}>
            <div className={"mt-4"}>
              <div>
                <span className={"font-bold"}>Time</span>: {activity.time}
              </div>
              <div>
                <span className={"font-bold"}>Venue</span>: {activity.venue}
              </div>
              <div className={"overflow-x-auto"}>
                <table className={"mt-2 table bg-base-300"}>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Activity</th>
                      <th>Details</th>
                      <th>Venue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activity.flow.map((item, index) => (
                      <tr key={index}>
                        <td>{item.time}</td>
                        <td>{item.activity}</td>
                        <td>{item.details}</td>
                        <td>{item.venue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}