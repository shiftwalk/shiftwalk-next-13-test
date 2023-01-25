import Container from '@/components/container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="pb-[20px] pt-[30px] lg:pb-[30px] lg:pt-[40px]">
      <Container>
        <div className="flex flex-wrap items-end space-x-[10vw] text-xs lg:text-base">
          <span className="block">
            <span className="block text-black opacity-60">Test Footer</span>
          </span>

          <span className="hidden lg:block">Contact</span>

          <span className="hidden lg:block">Something</span>

          <span className="block">
            <span className="block text-black">Something Else</span>
          </span>
        </div>
      </Container>
    </footer>
  )
}