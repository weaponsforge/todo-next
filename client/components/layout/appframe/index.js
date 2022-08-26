import Link from 'next/link'

// Layout
import AppContainer from '@/components/layout/appcontainer'
import AppCard from '@/layout/appcard'
import SimpleContainer from '@/layout/simplecontainer'

function AppFrame ({
  children,
  navigation = [],
  maxWidth = 'sm'
}) {
  return (
    <AppContainer maxWidth={maxWidth}>
      <AppCard>
        { children }
      </AppCard>

      {navigation.length > 0 &&
      <SimpleContainer>
        {navigation.map((item, index) => {
          const link = (index < navigation.length - 1)
            ? <span key={index}>
              <Link href={item.href}>{item.name}</Link> &nbsp; | &nbsp;
            </span>
            : <Link key={index} href={item.href}>{item.name}</Link>

          return link
        })}
      </SimpleContainer>
      }
    </AppContainer>
  )
}

export default AppFrame
