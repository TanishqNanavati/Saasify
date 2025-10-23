import CompanienCard from '@/components/CompanienCard'
import CompaniensList from '@/components/CompaniensList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import {recentSessions} from '@/constants/index'
import { getAllCompanions, getRecentSession } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'


const Page = async() => {

  const companions = await getAllCompanions({limit:3});
  const recentSessionCompnions = await getRecentSession(10);

  return (
    <main>
        <h1>Popular Companions</h1>
        <section className='home-section'>
          {
            companions.map((companion)=>(
              <CompanienCard
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
              />
            ))
          }
        </section>

        <section className='home-section'>
          <CompaniensList
          title="Recently Completed Sessions"
          companions={recentSessionCompnions}
          classNames="w-2/3 max-lg:w-full"
          />
          <CTA/>
        </section>
    </main>
  )
}

export default Page