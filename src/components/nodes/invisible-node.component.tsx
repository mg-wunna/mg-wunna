import { Handle, NodeProps } from 'reactflow'

function InvisibleNode({ targetPosition, sourcePosition }: NodeProps) {
  return (
    <div className="group relative">
      {targetPosition && (
        <Handle
          type="target"
          position={targetPosition}
          className="size-px !border-none !bg-transparent"
        />
      )}

      <span className="flex size-2 rounded-full bg-white/90 text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10" />

      {sourcePosition && (
        <Handle
          type="source"
          position={sourcePosition}
          className="size-px !border-none !bg-transparent"
        />
      )}
    </div>
  )
}

export default InvisibleNode
