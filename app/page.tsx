import CompanienCard from '@/components/CompanienCard'
import CompaniensList from '@/components/CompaniensList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import {recentSessions} from '@/constants/index'


const Page = () => {
  return (
    <main>
        <h1>Popular Companions</h1>
        <section className='home-section'>
          <CompanienCard
          id="123"
          name="Nuera the brain Explorer"
          topic="Nueral Network of Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
          />

          <CompanienCard
          id="456"
          name="Countsy the number wizard"
          topic="Derivative and Integrals"
          subject="Maths"
          duration={30}
          color="#e5d0ff"
          />

          <CompanienCard
          id="789"
          name="Verba the Vocabulary builder"
          topic="language"
          subject="English Literature"
          duration={30}
          color="#BDE7FF"
          />
        </section>

        <section className='home-section'>
          <CompaniensList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
          />
          <CTA/>
        </section>
    </main>
  )
}

export default Page