const routes = {
    home: () => '/',
    about: () => '/#about',
    work: () => '/#portfolio',
    quote: () => '/#contact',
    contact: () => '/#contact',
    portfolio: {
        puretrees: () => '/portfolio/puretrees',
        hindhead: () => '/portfolio/hindheadproperty',
        gametimeblitz: () => '/portfolio/gametimeblitz',
        habbocreate: () => '/portfolio/habbocreate',
        kaitenbun: () => '/portfolio/kaitenbun'
    },
}

const urlService = {
    routes,
}

export default urlService