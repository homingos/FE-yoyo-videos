import React from 'react'
import Card from './Card'

const content = [
    {
        'img': 'https://s3-alpha-sig.figma.com/img/db79/e05d/61f120adc195e72e9d0b77361fd20110?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JuPoFFSS~koVhhukii4jE5U778w1Zz33OvhmmgDLlMAgzVbRi8d8HRp35MQgTT17W0m9L3xCS0cejlDz7OE3JjeQIr2RPhU9v2DxgwQ0jb0CQUSO3MfLotBWL7xHAzPC9sBCMKyMSvJDk9LA9PThl9CBy0CLFZvyByGHl9fc5Uqt9lrBOGeHiCIcssLRl0xqA5WXMR7tcTY72nH1E7~IM4Gu1hAAQ7~OhBFNpwtG8rbanr0Se1XwmS14gG~85TPlA0Es9bU-9pubBLD-UZ6bwhPscWh4vGBJn0tK4CLjMeWIHp336HfDvirZKt0ZAFPogc77JfdbpeFUmW6jQyRaew__',
        'title': 'Salsa duet'
    },
    {
        'img': 'https://s3-alpha-sig.figma.com/img/5cdb/258d/a1445d396bd1ac3aee34f78f2d34b831?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JtfdafQzcZngmVmx0UN3W9GcuSTx8AkDMixt01hjvzKYGQ-Hcel9FPcwrS4QNM39kva024tuChLHEtUW2OwW0nyn1ov4f-66MO11ShKlir9-xuVMngoSwOVoS2Xs6QRGIDXfcc0PGBGj1hiGEjZhApL7OizcqRKPPuerETJihMpuMlBdsiGEflFCqU2TuZhCK73ukegetVWVie6ryfZR88hxQPCtrbqTM2ZmGgR4hWe7TODRUFkHMdnIz5-MI~NWmBkqS7GAoMaX2XW7vLIv9wAGLrVeOi9rmLwvUWIuGXWdefKEFG8~oyQIyjzWVjDNDkevjixz~L-5iyxRQk2edw__',
        'title': 'Spiderman'
    },
    {
        'img': 'https://s3-alpha-sig.figma.com/img/76cb/033b/5dda50f0e12f72007e5db309f57a9971?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HioVmRHcwMBLPNV1RpjDHTBoOJ2rtyPeV7Z0Autu4GtoI1l1xWDBOhDivDX0hzKCL2ap458-qYkLsp53vNx9w~xXzO8pa4tLnrdmGTYLhWdp-bh5fbkd1j7XiCv0fbKKwhU26JomJaLy47Cw78ES--9SFgRNq7dxuB6kuUjTGmSpKcLki-h7Ed9-NZtBzhfQteeTe6WYvKjGcYMC3eHFb5zpEnOUu7T7OnEWL9kkEWJvuFGwE7Ui3urAunWitj85rjo5h0IxpR3og4Wq1-2PjosKmw3s2EeYnxdr-Dd~6UwM3GvJBy30MGAGihgBXrBRAJPxr~3AnNBAtG-wQlAQIg__',
        'title': 'Salsa duet'
    },
    {
        'img': 'https://s3-alpha-sig.figma.com/img/5cdb/258d/a1445d396bd1ac3aee34f78f2d34b831?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JtfdafQzcZngmVmx0UN3W9GcuSTx8AkDMixt01hjvzKYGQ-Hcel9FPcwrS4QNM39kva024tuChLHEtUW2OwW0nyn1ov4f-66MO11ShKlir9-xuVMngoSwOVoS2Xs6QRGIDXfcc0PGBGj1hiGEjZhApL7OizcqRKPPuerETJihMpuMlBdsiGEflFCqU2TuZhCK73ukegetVWVie6ryfZR88hxQPCtrbqTM2ZmGgR4hWe7TODRUFkHMdnIz5-MI~NWmBkqS7GAoMaX2XW7vLIv9wAGLrVeOi9rmLwvUWIuGXWdefKEFG8~oyQIyjzWVjDNDkevjixz~L-5iyxRQk2edw__',
        'title': 'Spiderman'
    },
    {
        'img': 'https://s3-alpha-sig.figma.com/img/db79/e05d/61f120adc195e72e9d0b77361fd20110?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JuPoFFSS~koVhhukii4jE5U778w1Zz33OvhmmgDLlMAgzVbRi8d8HRp35MQgTT17W0m9L3xCS0cejlDz7OE3JjeQIr2RPhU9v2DxgwQ0jb0CQUSO3MfLotBWL7xHAzPC9sBCMKyMSvJDk9LA9PThl9CBy0CLFZvyByGHl9fc5Uqt9lrBOGeHiCIcssLRl0xqA5WXMR7tcTY72nH1E7~IM4Gu1hAAQ7~OhBFNpwtG8rbanr0Se1XwmS14gG~85TPlA0Es9bU-9pubBLD-UZ6bwhPscWh4vGBJn0tK4CLjMeWIHp336HfDvirZKt0ZAFPogc77JfdbpeFUmW6jQyRaew__',
        'title': 'Salsa duet'
    },
    {
        'img': 'https://s3-alpha-sig.figma.com/img/5cdb/258d/a1445d396bd1ac3aee34f78f2d34b831?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JtfdafQzcZngmVmx0UN3W9GcuSTx8AkDMixt01hjvzKYGQ-Hcel9FPcwrS4QNM39kva024tuChLHEtUW2OwW0nyn1ov4f-66MO11ShKlir9-xuVMngoSwOVoS2Xs6QRGIDXfcc0PGBGj1hiGEjZhApL7OizcqRKPPuerETJihMpuMlBdsiGEflFCqU2TuZhCK73ukegetVWVie6ryfZR88hxQPCtrbqTM2ZmGgR4hWe7TODRUFkHMdnIz5-MI~NWmBkqS7GAoMaX2XW7vLIv9wAGLrVeOi9rmLwvUWIuGXWdefKEFG8~oyQIyjzWVjDNDkevjixz~L-5iyxRQk2edw__',
        'title': 'Spiderman'
    },
    {
        'img': 'https://s3-alpha-sig.figma.com/img/76cb/033b/5dda50f0e12f72007e5db309f57a9971?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HioVmRHcwMBLPNV1RpjDHTBoOJ2rtyPeV7Z0Autu4GtoI1l1xWDBOhDivDX0hzKCL2ap458-qYkLsp53vNx9w~xXzO8pa4tLnrdmGTYLhWdp-bh5fbkd1j7XiCv0fbKKwhU26JomJaLy47Cw78ES--9SFgRNq7dxuB6kuUjTGmSpKcLki-h7Ed9-NZtBzhfQteeTe6WYvKjGcYMC3eHFb5zpEnOUu7T7OnEWL9kkEWJvuFGwE7Ui3urAunWitj85rjo5h0IxpR3og4Wq1-2PjosKmw3s2EeYnxdr-Dd~6UwM3GvJBy30MGAGihgBXrBRAJPxr~3AnNBAtG-wQlAQIg__',
        'title': 'Salsa duet'
    },
    {
        'img': 'https://s3-alpha-sig.figma.com/img/5cdb/258d/a1445d396bd1ac3aee34f78f2d34b831?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JtfdafQzcZngmVmx0UN3W9GcuSTx8AkDMixt01hjvzKYGQ-Hcel9FPcwrS4QNM39kva024tuChLHEtUW2OwW0nyn1ov4f-66MO11ShKlir9-xuVMngoSwOVoS2Xs6QRGIDXfcc0PGBGj1hiGEjZhApL7OizcqRKPPuerETJihMpuMlBdsiGEflFCqU2TuZhCK73ukegetVWVie6ryfZR88hxQPCtrbqTM2ZmGgR4hWe7TODRUFkHMdnIz5-MI~NWmBkqS7GAoMaX2XW7vLIv9wAGLrVeOi9rmLwvUWIuGXWdefKEFG8~oyQIyjzWVjDNDkevjixz~L-5iyxRQk2edw__',
        'title': 'Spiderman'
    },
]

const Content = () => {
  return (
    <div className='grid grid-cols-2 gap-4 items-center justify-center px-6 mt-2 mb-16'>
        {content.map((imgData: {img: string, title: string}, index: number) => (
            <Card key={`${imgData.title} + ${index}`} imgData={imgData}/>
        ))}
    </div>
  )
}

export default Content