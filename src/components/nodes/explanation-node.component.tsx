import { Handle, NodeProps } from 'reactflow'

function ExplanationNode({ data, targetPosition, sourcePosition }: NodeProps) {
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
        className={`flex flex-col rounded-xl bg-white/90 px-5 py-1 text-xs text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 ${data.variant === 'left' ? 'items-start' : data.variant === 'right' ? 'items-end' : 'items-center'} ${
          data.block === 'special' ? '!py-4' : ''
        }`}
      >
        {data.explanation}
        <p
          className={`text-xs text-zinc-500 ${data.variant === 'left' ? 'text-left' : data.variant === 'right' ? 'text-right' : data.variant === 'justify' ? 'text-justify' : 'text-center'} ${data.width ? '' : `${data.block === 'special' ? 'max-w-96' : 'max-w-72'}`}`}
          style={{ width: data.width }}
        >
          {data.description}
        </p>
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

export default ExplanationNode
