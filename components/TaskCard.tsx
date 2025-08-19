interface TaskCardProps {
  hoverable?: any
  clickable?: any
}

export default function TaskCard({ hoverable, clickable }: TaskCardProps) {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
      {/* TaskCard component content */}
    </div>
  )
}