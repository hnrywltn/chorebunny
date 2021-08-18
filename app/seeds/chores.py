from app.models import db, Chore


def seed_chores():
    chores = Chore(bunnyId=1, userId=2, choreId=1, bunnyComplete=True, userComplete=True, address="4547 Southern Street, Moulton, AL 35650",
                   detail="My weeds are out of control and need someone to get rid of them. I estimate an hour of work is needed.", total=10.00)
    chores2 = Chore(bunnyId=5, userId=3, choreId=6, bunnyComplete=True, userComplete=True, address="4351 Holly Street, Dalton, GA 30720",
                    detail="The kitchen is a mess! I had a party and now it needs cleaning. I estimate 2 hours of work.", total=30.00)
    chores3 = Chore(bunnyId=6, userId=3, choreId=11, bunnyComplete=False, userComplete=False, address="567 Wescam Court, Carson City, NV 89701",
                    detail="I just bought new Ikea office furniture and I need help putting it together. I estimate an hour and a half of work.", total=22.5)
    chores4 = Chore(bunnyId=7, userId=3, choreId=16, bunnyComplete=False, userComplete=False, address="2872 Upland Avenue, Leipsic, OH 45856",
                    detail="I need to move my beds to my new apartment. I estimate 2 hours of work.", total=40.00)
    chores5 = Chore(bunnyId=8, userId=2, choreId=21, bunnyComplete=False, userComplete=False, address="5014 Goodwin Avenue, Millwood, WA 99212",
                    detail="Need help setting up my home theater system. I estimate 2.5 hours of work.", total=50.00)
    chores6 = Chore(bunnyId=9, userId=3, choreId=26, bunnyComplete=False, userComplete=False, address="4660 Kelly Drive, Wheeling, WV 26003",
                    detail="I want to throw my best friend a baby shower. I estimate 8 hours of work.", total=160.00)

    db.session.add_all([
        chores,
        chores2,
        chores3,
        chores4,
        chores5,
        chores6
    ])

    db.session.commit()


def undo_chores():
    db.session.execute('TRUNCATE chores RESTART IDENTITY CASCADE;')
    db.session.commit()
