'use client'

import { SimpleLayout } from '@/components/simple-layout.component'
import { edges, nodes, nodeTypes } from '@/constants/skills'
import { useWindowSize } from '@/hooks/use-window-size.hook'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ReactFlow from 'reactflow'
import 'reactflow/dist/style.css'

export default function Roadmap() {
  const screenSize = useWindowSize()
  const isMobile = screenSize.width <= 528
  const isTablet = screenSize.width <= 1024 && screenSize.width > 528
  const [isRendering, setIsRendering] = useState(false)
  const [startScaling, setStartScaling] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsRendering(true)
    }, 1)
    return () => {
      setIsRendering(false)
    }
  }, [screenSize.width])

  useEffect(() => {
    if (isMobile && isRendering) {
      setTimeout(() => {
        setStartScaling(true)
      }, 1000)

      return () => {
        setStartScaling(false)
      }
    }
  }, [isMobile, isRendering])

  return (
    <SimpleLayout
      title="My Development Journey Roadmap"
      intro="Embark on a visual journey through my programming evolution! This interactive roadmap showcases the technologies, frameworks, and tools I've mastered along my path as a developer. From crafting beautiful user interfaces to architecting robust backend systems, each milestone represents a step in my continuous learning adventure. Explore the interconnected landscape of my technical expertise!"
    >
      {isRendering &&
        (isMobile ? (
          <div className="relative -mt-14 h-[950px] w-full overflow-hidden">
            {!startScaling && (
              <div className="relative z-[999] h-[200%] w-[200%]" />
            )}
            <div
              style={{
                width: '150%',
                height: '1500px',
                cursor: 'default',
                scale: startScaling ? 0.7 : 1,
              }}
            >
              <ReactFlow
                className="pointer-events-none -ml-36 -mt-[19rem]"
                nodes={nodes as any}
                edges={edges as any}
                fitView
                panOnScroll={false}
                panOnDrag={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
                nodesDraggable={false}
                nodesConnectable={false}
                elementsSelectable={false}
                proOptions={{ hideAttribution: true }}
                nodeTypes={nodeTypes}
              />
            </div>
          </div>
        ) : (
          <div
            style={{
              height: isTablet ? '1500px' : '1990px',
              cursor: 'default',
            }}
          >
            <ReactFlow
              className="pointer-events-none -mt-24"
              nodes={nodes as any}
              edges={edges as any}
              fitView
              panOnScroll={false}
              panOnDrag={false}
              zoomOnScroll={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              proOptions={{ hideAttribution: true }}
              nodeTypes={nodeTypes}
            />
          </div>
        ))}
      <p className="-mt-10 text-center text-xs text-zinc-400 dark:text-zinc-500">
        Credit to{' '}
        <Link
          href="https://roadmap.sh/"
          target="_blank"
          className="text-red-500 dark:text-red-400"
        >
          Roadmap.sh
        </Link>{' '}
        for the design inspiration
      </p>
    </SimpleLayout>
  )
}
