const routes = {
    home: () => '/',
    about: () => '/#about',
    work: () => '/#portfolio',
    quote: () => '/#contact',
    contact: () => '/#contact',
    privacy: () => '/privacy.pdf',
    terms: () => '/terms.pdf',
    portfolio: {
        puretrees: () => '/portfolio/puretrees',
        hindhead: () => '/portfolio/hindheadproperty',
        gametimeblitz: () => '/portfolio/gametimeblitz',
        habbocreate: () => '/portfolio/habbocreate',
        kaitenbun: () => '/portfolio/kaitenbun',
        thepensionadmin: () => '/portfolio/thepensionadministrator',
        tipsntoes: () => '/portfolio/tipsntoes',
    },
}

const urlService = {
    routes,
}

export default urlService