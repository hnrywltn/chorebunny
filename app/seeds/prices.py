from app.models import db, Pricing


def seed_pricings():
    price1 = Pricing(choreId=1, userId=1, rate=10)
    price2 = Pricing(choreId=1, userId=7, rate=15)
    price3 = Pricing(choreId=1, userId=8, rate=20)
    price4 = Pricing(choreId=2, userId=20, rate=10)
    price5 = Pricing(choreId=2, userId=21, rate=15)
    price6 = Pricing(choreId=2, userId=8, rate=20)
    price7 = Pricing(choreId=3, userId=9, rate=25)
    price8 = Pricing(choreId=3, userId=22, rate=10)
    price9 = Pricing(choreId=3, userId=23, rate=15)
    price10 = Pricing(choreId=4, userId=24, rate=20)
    price11 = Pricing(choreId=4, userId=25, rate=25)
    price12 = Pricing(choreId=4, userId=2, rate=10)
    price13 = Pricing(choreId=5, userId=26, rate=15)
    price14 = Pricing(choreId=5, userId=21, rate=20)
    price15 = Pricing(choreId=5, userId=7, rate=25)
    price16 = Pricing(choreId=6, userId=20, rate=30)
    price17 = Pricing(choreId=6, userId=27, rate=10)
    price18 = Pricing(choreId=6, userId=5, rate=15)
    price19 = Pricing(choreId=7, userId=28, rate=20)
    price20 = Pricing(choreId=7, userId=29, rate=25)
    price21 = Pricing(choreId=7, userId=4, rate=10)
    price22 = Pricing(choreId=8, userId=6, rate=15)
    price23 = Pricing(choreId=8, userId=22, rate=20)
    price24 = Pricing(choreId=8, userId=23, rate=25)
    price25 = Pricing(choreId=9, userId=30, rate=10)
    price26 = Pricing(choreId=9, userId=1, rate=15)
    price27 = Pricing(choreId=9, userId=24, rate=20)
    price28 = Pricing(choreId=10, userId=20, rate=10)
    price29 = Pricing(choreId=10, userId=4, rate=15)
    price30 = Pricing(choreId=10, userId=5, rate=20)
    price31 = Pricing(choreId=11, userId=17, rate=25)
    price32 = Pricing(choreId=11, userId=18, rate=30)
    price33 = Pricing(choreId=11, userId=19, rate=10)
    price34 = Pricing(choreId=12, userId=2, rate=15)
    price35 = Pricing(choreId=12, userId=21, rate=20)
    price36 = Pricing(choreId=12, userId=8, rate=25)
    price37 = Pricing(choreId=13, userId=22, rate=10)
    price38 = Pricing(choreId=13, userId=6, rate=20)
    price39 = Pricing(choreId=13, userId=23, rate=15)
    price40 = Pricing(choreId=14, userId=24, rate=10)
    price41 = Pricing(choreId=14, userId=5, rate=15)
    price42 = Pricing(choreId=14, userId=25, rate=20)
    price43 = Pricing(choreId=15, userId=26, rate=10)
    price44 = Pricing(choreId=15, userId=6, rate=15)
    price45 = Pricing(choreId=15, userId=27, rate=20)
    price46 = Pricing(choreId=16, userId=17, rate=10)
    price47 = Pricing(choreId=16, userId=18, rate=15)
    price48 = Pricing(choreId=16, userId=1, rate=20)
    price49 = Pricing(choreId=17, userId=4, rate=10)
    price50 = Pricing(choreId=17, userId=7, rate=15)
    price51 = Pricing(choreId=17, userId=25, rate=20)
    price52 = Pricing(choreId=18, userId=6, rate=10)
    price53 = Pricing(choreId=18, userId=5, rate=15)
    price54 = Pricing(choreId=18, userId=19, rate=20)
    price55 = Pricing(choreId=19, userId=28, rate=10)
    price56 = Pricing(choreId=19, userId=3, rate=15)
    price57 = Pricing(choreId=19, userId=29, rate=20)
    price58 = Pricing(choreId=20, userId=9, rate=10)
    price59 = Pricing(choreId=20, userId=30, rate=15)
    price60 = Pricing(choreId=20, userId=18, rate=20)
    price61 = Pricing(choreId=21, userId=26, rate=10)
    price62 = Pricing(choreId=21, userId=2, rate=15)
    price63 = Pricing(choreId=21, userId=27, rate=20)
    price64 = Pricing(choreId=22, userId=19, rate=10)
    price65 = Pricing(choreId=22, userId=31, rate=15)
    price66 = Pricing(choreId=22, userId=17, rate=20)
    price67 = Pricing(choreId=23, userId=32, rate=10)
    price68 = Pricing(choreId=23, userId=33, rate=15)
    price69 = Pricing(choreId=23, userId=34, rate=20)
    price70 = Pricing(choreId=24, userId=35, rate=10)
    price71 = Pricing(choreId=24, userId=36, rate=15)
    price72 = Pricing(choreId=24, userId=37, rate=20)
    price73 = Pricing(choreId=25, userId=31, rate=10)
    price74 = Pricing(choreId=25, userId=35, rate=15)
    price75 = Pricing(choreId=25, userId=38, rate=20)
    price76 = Pricing(choreId=26, userId=28, rate=10)
    price77 = Pricing(choreId=26, userId=12, rate=15)
    price78 = Pricing(choreId=26, userId=13, rate=20)
    price79 = Pricing(choreId=27, userId=29, rate=10)
    price80 = Pricing(choreId=27, userId=33, rate=15)
    price81 = Pricing(choreId=27, userId=9, rate=20)
    price82 = Pricing(choreId=28, userId=32, rate=10)
    price83 = Pricing(choreId=28, userId=30, rate=15)
    price84 = Pricing(choreId=28, userId=14, rate=20)
    price85 = Pricing(choreId=29, userId=15, rate=10)
    price86 = Pricing(choreId=29, userId=16, rate=15)
    price87 = Pricing(choreId=29, userId=34, rate=20)
    price88 = Pricing(choreId=30, userId=12, rate=10)
    price89 = Pricing(choreId=30, userId=35, rate=15)
    price90 = Pricing(choreId=30, userId=31, rate=20)
    price91 = Pricing(choreId=31, userId=36, rate=10)
    price92 = Pricing(choreId=31, userId=37, rate=15)
    price93 = Pricing(choreId=31, userId=10, rate=20)
    price94 = Pricing(choreId=32, userId=11, rate=10)
    price95 = Pricing(choreId=32, userId=13, rate=15)
    price96 = Pricing(choreId=32, userId=32, rate=20)
    price97 = Pricing(choreId=33, userId=33, rate=10)
    price98 = Pricing(choreId=33, userId=34, rate=15)
    price99 = Pricing(choreId=33, userId=16, rate=20)
    price100 = Pricing(choreId=34, userId=15, rate=10)
    price101 = Pricing(choreId=34, userId=14, rate=15)
    price102 = Pricing(choreId=34, userId=3, rate=20)
    price103 = Pricing(choreId=35, userId=10, rate=10)
    price104 = Pricing(choreId=35, userId=37, rate=15)
    price105 = Pricing(choreId=35, userId=36, rate=20)
    price106 = Pricing(choreId=36, userId=38, rate=10)
    price107 = Pricing(choreId=36, userId=11, rate=15)
    price108 = Pricing(choreId=36, userId=39, rate=10)
    price109 = Pricing(choreId=37, userId=39, rate=20)
    price110 = Pricing(choreId=37, userId=39, rate=10)
    price111 = Pricing(choreId=37, userId=40, rate=15)
    price112 = Pricing(choreId=38, userId=38, rate=20)
    price113 = Pricing(choreId=38, userId=10, rate=10)
    price114 = Pricing(choreId=38, userId=16, rate=15)
    price115 = Pricing(choreId=39, userId=15, rate=20)
    price116 = Pricing(choreId=39, userId=14, rate=10)
    price117 = Pricing(choreId=39, userId=3, rate=15)
    price118 = Pricing(choreId=40, userId=13, rate=20)
    price119 = Pricing(choreId=40, userId=12, rate=10)
    price120 = Pricing(choreId=40, userId=11, rate=15)
    price121 =Pricing(choreId=16,userId=1,rate=20)
    price122 =Pricing(choreId=21,userId=1,rate=20)
    price123 =Pricing(choreId=26,userId=1,rate=20)

    db.session.add_all([
        price1,
        price2,
        price3,
        price4,
        price5,
        price6,
        price7,
        price8,
        price9,
        price10,
        price11,
        price12,
        price13,
        price14,
        price15,
        price16,
        price17,
        price18,
        price19,
        price20,
        price21,
        price22,
        price23,
        price24,
        price25,
        price26,
        price27,
        price28,
        price29,
        price30,
        price31,
        price32,
        price33,
        price34,
        price35,
        price36,
        price37,
        price38,
        price39,
        price40,
        price41,
        price42,
        price43,
        price44,
        price45,
        price46,
        price47,
        price48,
        price49,
        price50,
        price51,
        price52,
        price53,
        price54,
        price55,
        price56,
        price57,
        price58,
        price59,
        price60,
        price61,
        price62,
        price63,
        price64,
        price65,
        price66,
        price67,
        price68,
        price69,
        price70,
        price71,
        price72,
        price73,
        price74,
        price75,
        price76,
        price77,
        price78,
        price79,
        price80,
        price81,
        price82,
        price83,
        price84,
        price85,
        price86,
        price87,
        price88,
        price89,
        price90,
        price91,
        price92,
        price93,
        price94,
        price95,
        price96,
        price97,
        price98,
        price99,
        price100,
        price101,
        price102,
        price103,
        price104,
        price105,
        price106,
        price107,
        price108,
        price109,
        price110,
        price111,
        price112,
        price113,
        price114,
        price115,
        price116,
        price117,
        price118,
        price119,
        price120,
        price121,
        price122,
        price123
    ])


    db.session.commit()


def undo_pricings():
    db.session.execute('TRUNCATE pricings RESTART IDENTITY CASCADE;')
    db.session.commit()
