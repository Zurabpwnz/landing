$(document).ready(function () {
    var entries = [{label: 'documents', url: '#', target: '_top', tooltip: 'Lorem ipsum'}, {
        label: 'SUPPLIERS',
        url: '#',
        target: '_top',
        tooltip: 'Dolor sit amet'
    }, {label: 'cities', url: '#', target: '_top', tooltip: 'Consetetur sadipscing'}, {
        label: 'Last',
        url: '#',
        target: '_top',
        tooltip: 'Sed diam'
    }, {label: 'minute', url: '#', target: '_top'}, {
        label: 'offer',
        url: '#',
        target: '_top',
        tooltip: 'At vero'
    }, {label: 'users', url: '#', target: '_top', tooltip: 'Nonumy eirmod'}, {
        label: 'deals',
        url: '#',
        target: '_top',
        tooltip: 'Stet clita'
    }, {label: 'search', url: '#', target: '_top', tooltip: 'Justo duo'}, {
        label: 'engine',
        url: '#',
        target: '_top',
        tooltip: 'Ut wisi enim'
    }, {label: 'Ratings', url: '#', target: '_top', tooltip: 'Minim veniam'}, {
        label: 'favorites',
        url: '#',
        target: '_top',
        tooltip: 'Quis nostrud'
    }, {label: 'contact', url: '#', target: '_top'}, {
        label: 'details',
        url: '#',
        target: '_top',
        tooltip: 'Veniam isictus'
    }, {label: 'phone', url: '#', target: '_top', tooltip: 'Autem insto'}, {
        label: 'guides',
        url: '#',
        target: '_top',
        tooltip: 'Officia dolor'
    }, {label: 'booking', url: '#', target: '_top', tooltip: 'Digi tal'}, {
        label: 'friends',
        url: '#',
        target: '_top',
        tooltip: 'Amet et quam'
    }, {label: 'likes', url: '#', target: '_top', tooltip: 'Meno equox'}, {
        label: 'Routes',
        url: '#',
        target: '_top',
        tooltip: 'Duis autem'
    }, {label: 'official', url: '#', target: '_top', tooltip: 'Soluta nobis'}, {
        label: 'attractions',
        url: '#',
        target: '_top',
        tooltip: 'Blandit praesent'
    }, {label: 'countries', url: '#', target: '_top', tooltip: 'Dignissim qui'}, {
        label: 'customs',
        url: '#',
        target: '_top',
        tooltip: 'Et iusto odio'
    }, {label: 'realities', url: '#', target: '_top', tooltip: 'Facilisis at vero'}, {
        label: 'social',
        url: '#',
        target: '_top',
        tooltip: 'Dolore eu'
    }, {label: 'interests', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'hotels',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'offers', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'cards',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'airports', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'air tickets',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'check in visa', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'connections',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'categories', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'features',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'History', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'subscriptions',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'Wishlist', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'events',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'video', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'attractions',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'apartments', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'suppliers',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'profiles', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'accommodation',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'bookmarks', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'reviews',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'tours', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'comments',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'email', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'services',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'requests', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'moving',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'weather', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'shopping',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'prices', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'information',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }, {label: 'ratings data', url: '#', target: '_top', tooltip: 'In vulputate'}, {
        label: 'guidebooks',
        url: '#',
        target: '_top',
        tooltip: 'In vulputate'
    }];
    var settings = {
        entries: entries,
        width: '100%',
        height: '100%',
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: '#fff',
        opacityOver: 1.00,
        opacityOut: 0.1,
        opacitySpeed: 6,
        fov: 800,
        speed: 0.2,
        fontFamily: 'GothamProMedium, Arial, sans-serif',
        fontSize: '16',
        fontColor: '#3dbdf4',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#3dbdf4',
        tooltipFontWeight: 'normal',
        tooltipFontStyle: 'normal',
        tooltipFontStretch: 'normal',
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 20
    };
    // $('#cloud').svg3DTagCloud(settings);
});