from app.models import db, Pricing


def seed_pricings():
    price1 = Pricing(choreId=1, userId=1, rate=10)
    price2 = Pricing(choreId=2, userId=1, rate=15)
    price3 = Pricing(choreId=6, userId=1, rate=20)
    price4 = Pricing(choreId=7, userId=1, rate=10)
    price5 = Pricing(choreId=3, userId=2, rate=15)
    price6 = Pricing(choreId=4, userId=2, rate=20)
    price7 = Pricing(choreId=8, userId=2, rate=25)
    price8 = Pricing(choreId=9, userId=2, rate=10)
    price9 = Pricing(choreId=5, userId=3, rate=15)
    price10 = Pricing(choreId=10, userId=3, rate=20)
    price11 = Pricing(choreId=11, userId=3, rate=25)
    price12 = Pricing(choreId=16, userId=3, rate=10)
    price13 = Pricing(choreId=12, userId=4, rate=15)
    price14 = Pricing(choreId=13, userId=4, rate=20)
    price15 = Pricing(choreId=17, userId=4, rate=25)
    price16 = Pricing(choreId=18, userId=4, rate=30)
    price17 = Pricing(choreId=14, userId=5, rate=10)
    price18 = Pricing(choreId=15, userId=5, rate=15)
    price19 = Pricing(choreId=19, userId=5, rate=20)
    price20 = Pricing(choreId=20, userId=5, rate=25)
    price21 = Pricing(choreId=21, userId=6, rate=10)
    price22 = Pricing(choreId=22, userId=6, rate=15)
    price23 = Pricing(choreId=26, userId=6, rate=20)
    price24 = Pricing(choreId=27, userId=6, rate=25)
    price25 = Pricing(choreId=23, userId=7, rate=10)
    price26 = Pricing(choreId=24, userId=7, rate=15)
    price27 = Pricing(choreId=28, userId=7, rate=20)
    price28 = Pricing(choreId=29, userId=7, rate=10)
    price29 = Pricing(choreId=25, userId=8, rate=15)
    price30 = Pricing(choreId=30, userId=8, rate=20)
    price31 = Pricing(choreId=31, userId=8, rate=25)
    price32 = Pricing(choreId=32, userId=8, rate=30)
    price33 = Pricing(choreId=36, userId=9, rate=10)
    price34 = Pricing(choreId=37, userId=9, rate=15)
    price35 = Pricing(choreId=33, userId=9, rate=20)
    price36 = Pricing(choreId=34, userId=9, rate=25)
    price37 = Pricing(choreId=38, userId=10, rate=10)
    price38 = Pricing(choreId=39, userId=10, rate=20)
    price39 = Pricing(choreId=40, userId=10, rate=15)
    price40 = Pricing(choreId=35, userId=10, rate=20)
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
        price40
    ])

    db.session.commit()


def undo_pricings():
    db.session.execute('TRUNCATE pricings RESTART IDENTITY CASCADE;')
    db.session.commit()
