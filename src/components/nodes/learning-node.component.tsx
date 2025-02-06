import { Handle, NodeProps } from 'reactflow'

function LearningNode({ data, targetPosition, sourcePosition }: NodeProps) {
  return (
    <div className="group relative">
      {targetPosition && (
        <Handle
          type="target"
          position={targetPosition}
          className="!border-none !bg-transparent"
        />
      )}

      <button
        type="button"
        className="flex items-center rounded-full bg-white/90 px-5 py-1 text-xs text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
      >
        <svg
          aria-hidden="true"
          className="me-2 size-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        {data.course}
      </button>

      {sourcePosition && (
        <Handle
          type="source"
          position={sourcePosition}
          className="!border-none !bg-transparent"
        />
      )}
    </div>
  )
}

export default LearningNode
