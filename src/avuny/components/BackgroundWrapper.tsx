import { BackgroundEffect } from '@/avuny/types/BackgroundEffect'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'

export const BackgroundWrapper = ({
  children,
  backgroundEffect,
  backgroundImageUrl,
}: {
  children: React.ReactNode
  backgroundEffect?: BackgroundEffect
  backgroundImageUrl?: string | null
}) => {
  if (backgroundEffect === 'beamsWithCollision') {
    return (
      <BackgroundBeamsWithCollision className="min-h-screen relative overflow-hidden transition-colors duration-500">
        {children}
      </BackgroundBeamsWithCollision>
    )
  }

  if (backgroundImageUrl) {
    return (
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="min-h-screen">{children}</div>
      </div>
    )
  }

  return <div className="min-h-screen">{children}</div>
}
