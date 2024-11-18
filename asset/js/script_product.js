// add 4 Best Sellers
let BestSeller = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'b',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}

BestSeller.add('./asset/img/passionista.png',
'PASSIONISTA',
'DESIGNED',
'50000',
`Donut passion fruit filling & chocolate pieces
The next big revelation in donut fashion.
Orange glaze, yellow stripes, and dark chocolate statement pieces.
Work it, girl.`,
'Pick It Now !')

BestSeller.add('./asset/img/BANANADARKSPRINKLES.png',
'BANANA DARK SPRINKLES',
'DESIGNED',
'49999',
`Donut banana taste & chocolate sprinkles
Oh, so this is what happens when you cover a banana in dark chocolate!`,
'Pick It Now !');

BestSeller.add('./asset/img/BerryWhite.png',
`BERRY WHITE `,
'DESIGNED',
'40000',
`Donut strawberry filling & white chocolate
The first, not your last, your everything.
Enjoy the taste of Belgian white chocolate and real strawberries inside and out.`,
'Pick It Now !');

BestSeller.add('./asset/img/CARAMAZING.png',
`CARAMAZING`,
'DESIGNED',
'67000',
`Donut caramel filling & chocolate lines
We wanted you to overdose on silky smooth caramel. Period.
So meltingly delicious you won't believe your taste buds.
A choco-striped powerhouse sprinkled with crispy hazelnut crunch. `,
'Pick It Now !')

BestSeller.add('./asset/img/CHOCALMIGHTY.png',
`CHOC ALMIGHTY`,
'DESIGNED',
'51000',
`Donut cocoa & Belgian chocolate deco
Say hello to mister popular!
This crowd favourite is coated with a lovely dark cocoa glaze and topped with little bits of real Belgian milk chocolate.
Sink your teeth into this perfectly round shape and soft dough. `,
'Pick It Now !')

BestSeller.add('./asset/img/Coconutti.png',
`COCONUTTI`,
'DESIGNED',
'69000',
`Donut cream filling & white chocolate top
The cocodonut that cracks everybody up! 
White chocolate coated with dark choco stripes, 
sprinkled with sweet coconut shavings and filled to the brim with cream.`,
'Pick It Now !')

BestSeller.add('./asset/img/COLORSPRINKLES.png',
`COLOR SPRINKLES`,
'TRADITIONAL',
'49000',
`Donut white & colored sprinkles
Can't pick a favourite colour? No worries. 
Its white glaze topped with rainbow sprinkles will keep your satisfied!`,
'Pick It Now !')

localStorage.setItem('BestSellers', JSON.stringify(BestSeller.arr));

let FeatureProduct = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'f',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}

FeatureProduct.add('./asset/img/CRUSHEDCANDYWHITE.png',
`CRUSHED CANDY WHITE`,
'TRADITIONAL',
`330000`,
`Donut white & crushed cocoa candies
Crush it every time with this white wonder topped with broken pieces of joy!`,
'Pick IT Now !');

FeatureProduct.add('./asset/img/CRUSHEDCANDYDARK.png',
`CRUSHED CANDY DARK`,
'TRADITIONAL',
`33000`,
`Donut cocoa & crushed cocoa candies
Crush it every time with this chocolatey showstopper topped with broken pieces of joy!`,
'Pick It Now !');

FeatureProduct.add('./asset/img/FUNFETTI.png',
`FUNFETTI`,
'TRADITIONAL',
`30000`,
`Donut strawberry taste & chocolate deco
Wonder what a rainbow party in your mouth tastes like? 
Well, lucky you: this strawberry-coated sweet treat is sprinkled with
white vermicelli and boasts a heavenly light yet chuncky bite! `,
'Pick It Now !');

FeatureProduct.add('./asset/img/GOLDENFRY.png',
`GOLDENFRY`,
'TRADITIONAL',
`30000`,
`Donut crystal sugar
Nothing beats the all-time classic.
This golden oldie is specially baked for its smooth, airy and chewy dough, 
amazingly sweet taste and a bite that makes guests come back for more. `,
'Pick It Now !');

FeatureProduct.add('./asset/img/HOLYCHOC.png',
`HOLY CHOC`,
'TRADITIONAL',
`35000`,
`CDonut chocolate filling & cocoa flakes
So choc-o-lotta chocolate it even makes chocoholics go OH MY GOD!
Think dark choco glazing, deliciously rich choco filling and
triple coloured choco flakes for an explosive finish.`,
'Pick It Now !');

FeatureProduct.add('./asset/img/MUCHOPISTACHIO.png',
`MUCHO PISTACHIO`,
'DESIGNED',
`52000`,
`Donut pistachio filling & chocolate lines
More, most, mucho! Loooads of pistachio cream on the inside, 
green almond crispiness on the out. 
This yellow looker is even finished with milk choco stripes for tasty crunch in camouflage.  `,
'Pick It Now !');

FeatureProduct.add('./asset/img/PINKIE.png',
`PINKIE`,
'DESIGNED',
`89000`,
`Donut strawberry taste & marshmellows
So fluffy every bite is like floating on a cloud.
With its pretty in pink glazing, 
rainbow sugar crystals and a super soft mix of marshmallow cubes, 
this sweetie will make you look through rose-coloured glasses. `,
'Pick It Now !');

FeatureProduct.add('./asset/img/NUTTYZAFARI.png',
`NUTTY ZAFARI`,
'DESIGNED',
`69000`,
`Donut white & chocolate lines & crunch
Oh boy, the hunt for exotic-looking wildlife is on! 
White glazing drizzled with dark choco stripes and 
crunchy nuts for a mesmerising treat that's sure to attract a lot of attention. `,
'Pick It Now !');

FeatureProduct.add('./asset/img/NUTZILLA.png',
`NUTZILLA`,
'TRADITIONAL',
`49000`,
`Donut hazelnut cocoa filling & crunch
Whether you go loco over his milk cocoa coating, 
satisfying hazelnut crunch or the choco-loads of hazelnut cream inside, 
this bad boy is here to wow you with bold taste and big looks. `,
'Pick It Now !');

FeatureProduct.add('./asset/img/PLAINDONUT.png',
`PLAIN DONUT`,
'TRADITIONAL',
`29000`,
`Donut plain
Simple as apple pie without the apple pie. `,
'Pick It Now !');

FeatureProduct.add('./asset/img/QUEENV.png',
`QUEEN V`,
'DESIGNED',
`49000`,
`Donut custard filling & cocoa coating
She's as sassy as she is sweet. 
This royal is ruler of all things vanilla thanks to her soft vanilla custard cream, 
a blanket of dark choco glaze and yellow stripes for extra fancy looks. `,
'Pick It Now !');

FeatureProduct.add('./asset/img/RASPBERRYBLISS.png',
`RASPBERRY BLISS`,
'DESIGNED',
`79000`,
`Donut raspberry filling & chocolate top
Hand-pick this sweet baby if you're craving real, 
royal milk chocolate topped with freeze-dried raspberries for pure ecstasy! 
But wait, there's more: raspberry jam right in heart! `,
'Pick It Now !');

FeatureProduct.add('./asset/img/SPECTACULOUS.png',
`SPECTACULOUS`,
'DESIGNED',
`89000`,
`Donut white & speculoos crunch
It's mmmmagic! Amaze with white glaze and crushed speculoos pieces. 
Why? Well, this well-balanced show star is just absolutely magnificent in wholesome taste. `,
'Pick It Now !');

FeatureProduct.add('./asset/img/STRAWJELLYJAM.png',
`STRAWJELLY JAM`,
'DESIGNED',
`69000`,
`Donut strawberry filling & chocolate top
You adore real white chocolate. And love real strawberries? 
This chocolatey flavour bomb with strawberry pieces is right up you alley! 
Discover its super sweet strawberry filling yourself. `,
'Pick It Now !');

FeatureProduct.add('./asset/img/TheBelgiyummy.png',
`THE BELGIYUMMY`,
'DESIGNED',
`89000`,
`Donut Belgian chocolate filling & top
Huuuge donut. Teeny-tiny country! 
A luxuriously dark delight, proud of its white chocolate flakes, 
indulgent choco chunks and authentic Belgian chocolate glazing. 
Its even filled with REAL BELGIAN CHOCOLATE! Anyone got a map?`,
'Pick It Now !');

FeatureProduct.add('./asset/img/WillamonTell.png',
`WILLAMON TELL`,
'TRADITIONAL',
`49000`,
`Donut apple filling & cinnamon sugar`,
'Pick It Now !');
localStorage.setItem('FeatureProduct', JSON.stringify(FeatureProduct.arr));