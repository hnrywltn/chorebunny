from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(username='demo-user', name='Demo User', email='demoUser@gmail.com', password='password', isBunny=True, bio='Demo User is a jack of all trades! From destroying the weed infestation in your garden to scrubbing your kitchen. Demo user has the tools to help you assemble furniture and the muscles to move your funiture to a new place. He is also a certified electrician that can solve any of your wiring needs. Lastly, it may not look like it, but Demo user is quite the event planner. Reserve a date with Demo User and make your next event a memorable one.', address='demo street, demo city, DM 12345')
    marnie = User(username='marnie', name='Marnie', email='marnie@aa.io', password='password', isBunny=False, bio='Real name is Connery. Sean Connery.', address='Top Secret')
    bobbie = User(username='bobbie', name='Bobbie Fischerman', email='bobbie@aa.io', password='password', isBunny=False, bio='World Fishing Champion', address='1969')
    bunny2 =User(username="Demo2",email="Demo2@gmail.com",name="Manuel Labor",password="password",isBunny= True,bio="My name is Demo2 and I can help you with your chores!",address="2 Demo Street")
    bunny3 =User(username="Demo3",email="Demo3@gmail.com",name="Ivan Itchinos",password="password",isBunny= True,bio="My name is Demo3 and I can help you with your chores!",address="3 Demo Street")
    bunny4 =User(username="Demo4",email="Demo4@gmail.com",name="Ivan Notheridiya",password="password",isBunny= True,bio="My name is Demo4 and I can help you with your chores!",address="4 Demo Street")
    bunny5 =User(username="Demo5",email="Demo5@gmail.com",name="Mustafa Leek",password="password",isBunny= True,bio="My name is Demo5 and I can help you with your chores!",address="5 Demo Street")
    bunny6 =User(username="Demo6",email="Demo6@gmail.com",name="Emma Grate",password="password",isBunny= True,bio="My name is Demo6 and I can help you with your chores!",address="6 Demo Street")
    bunny7 =User(username="Demo7",email="Demo7@gmail.com",name="Annie Versaree",password="password",isBunny= True,bio="My name is Demo7 and I can help you with your chores!",address="7 Demo Street")
    bunny8 =User(username="Demo8",email="Demo8@gmail.com",name="Tim Midsaylesman",password="password",isBunny= True,bio="My name is Demo8 and I can help you with your chores!",address="8 Demo Street")
    bunny9 =User(username="Demo9",email="Demo9@gmail.com",name="Mary Krismass",password="password",isBunny= True,bio="My name is Demo9 and I can help you with your chores!",address="9 Demo Street")
    bunny10 =User(username="Demo10",email="Demo10@gmail.com",name="Patricia Junkins",password="password",isBunny= True,bio="My name is Demo10 and I can help you with your chores!",address="10 Demo Street")
    bunny11 =User(username="Demo11",email="Demo11@gmail.com",name="Sarah Conner",password="password",isBunny= True,bio="My name is Demo11 and I can help you with your chores!",address="11 Demo Street")
    bunny12 =User(username="Demo12",email="Demo12@gmail.com",name="Melissa Walker",password="password",isBunny= True,bio="My name is Demo12 and I can help you with your chores!",address="12 Demo Street")
    bunny13 =User(username="Demo13",email="Demo13@gmail.com",name="Pat Star",password="password",isBunny= True,bio="My name is Demo13 and I can help you with your chores!",address="13 Demo Street")
    bunny14 =User(username="Demo14",email="Demo14@gmail.com",name="Tommy Lee",password="password",isBunny= True,bio="My name is Demo14 and I can help you with your chores!",address="14 Demo Street")
    bunny15 =User(username="Demo15",email="Demo15@gmail.com",name="Kate Sterling",password="password",isBunny= True,bio="My name is Demo15 and I can help you with your chores!",address="15 Demo Street")
    bunny16 =User(username="Demo16",email="Demo16@gmail.com",name="Henry Kim",password="password",isBunny= True,bio="My name is Demo16 and I can help you with your chores!",address="16 Demo Street")
    bunny17 =User(username="Demo17",email="Demo17@gmail.com",name="Kim Lee",password="password",isBunny= True,bio="My name is Demo17 and I can help you with your chores!",address="17 Demo Street")
    bunny18 =User(username="Demo18",email="Demo18@gmail.com",name="Allie Wong",password="password",isBunny= True,bio="My name is Demo18 and I can help you with your chores!",address="18 Demo Street")
    bunny19 =User(username="Demo19",email="Demo19@gmail.com",name="Tim Cook",password="password",isBunny= True,bio="My name is Demo19 and I can help you with your chores!",address="19 Demo Street")
    bunny20 =User(username="Demo20",email="Demo20@gmail.com",name="Elon Musk",password="password",isBunny= True,bio="My name is Demo20 and I can help you with your chores!",address="20 Demo Street")
    bunny21 =User(username="Demo21",email="Demo21@gmail.com",name="Jeff Bezoo",password="password",isBunny= True,bio="My name is Demo21 and I can help you with your chores!",address="21 Demo Street")
    bunny22 =User(username="Demo22",email="Demo22@gmail.com",name="Steve Jobless",password="password",isBunny= True,bio="My name is Demo22 and I can help you with your chores!",address="22 Demo Street")
    bunny23 =User(username="Demo23",email="Demo23@gmail.com",name="Jamie Dia",password="password",isBunny= True,bio="My name is Demo23 and I can help you with your chores!",address="23 Demo Street")
    bunny24 =User(username="Demo24",email="Demo24@gmail.com",name="Jordan Diaz",password="password",isBunny= True,bio="My name is Demo24 and I can help you with your chores!",address="24 Demo Street")
    bunny25 =User(username="Demo25",email="Demo25@gmail.com",name="Taylor Costia",password="password",isBunny= True,bio="My name is Demo25 and I can help you with your chores!",address="25 Demo Street")
    bunny26 =User(username="Demo26",email="Demo26@gmail.com",name="Robin Stein",password="password",isBunny= True,bio="My name is Demo26 and I can help you with your chores!",address="26 Demo Street")
    bunny27 =User(username="Demo27",email="Demo27@gmail.com",name="Leah Young",password="password",isBunny= True,bio="My name is Demo27 and I can help you with your chores!",address="27 Demo Street")
    bunny28 =User(username="Demo28",email="Demo28@gmail.com",name="Doug Stamper",password="password",isBunny= True,bio="My name is Demo28 and I can help you with your chores!",address="28 Demo Street")
    bunny29 =User(username="Demo29",email="Demo29@gmail.com",name="Patricia Styles",password="password",isBunny= True,bio="My name is Demo29 and I can help you with your chores!",address="29 Demo Street")
    bunny30 =User(username="Demo30",email="Demo30@gmail.com",name="Mathew Powers",password="password",isBunny= True,bio="My name is Demo30 and I can help you with your chores!",address="30 Demo Street")
    bunny31 =User(username="Demo31",email="Demo31@gmail.com",name="Ceasar Chavez",password="password",isBunny= True,bio="My name is Demo31 and I can help you with your chores!",address="31 Demo Street")
    bunny32 =User(username="Demo32",email="Demo32@gmail.com",name="Ingrid Lu",password="password",isBunny= True,bio="My name is Demo32 and I can help you with your chores!",address="32 Demo Street")
    bunny33 =User(username="Demo33",email="Demo33@gmail.com",name="Shane Walker",password="password",isBunny= True,bio="My name is Demo33 and I can help you with your chores!",address="33 Demo Street")
    bunny34 =User(username="Demo34",email="Demo34@gmail.com",name="Britney Spears",password="password",isBunny= True,bio="My name is Demo34 and I can help you with your chores!",address="34 Demo Street")
    bunny35 =User(username="Demo35",email="Demo35@gmail.com",name="Mariah Carey",password="password",isBunny= True,bio="My name is Demo35 and I can help you with your chores!",address="35 Demo Street")
    bunny36 =User(username="Demo36",email="Demo36@gmail.com",name="Steve Aoki",password="password",isBunny= True,bio="My name is Demo36 and I can help you with your chores!",address="36 Demo Street")
    bunny37 =User(username="Demo37",email="Demo37@gmail.com",name="Alison Wonderland",password="password",isBunny= True,bio="My name is Demo37 and I can help you with your chores!",address="37 Demo Street")
    bunny38 =User(username="Demo38",email="Demo38@gmail.com",name="Jessica Simpson",password="password",isBunny= True,bio="My name is Demo38 and I can help you with your chores!",address="38 Demo Street")
    bunny39 =User(username="Demo39",email="Demo39@gmail.com",name="Laura Ray",password="password",isBunny= True,bio="My name is Demo39 and I can help you with your chores!",address="39 Demo Street")
    bunny40 =User(username="Demo40",email="Demo40@gmail.com",name="Cassie sing",password="password",isBunny= True,bio="My name is Demo40 and I can help you with your chores!",address="40 Demo Street")
    db.session.add_all([
        demo,
        marnie,
        bobbie,
        bunny2,
        bunny3,
        bunny4,
        bunny5,
        bunny6,
        bunny7,
        bunny8,
        bunny9,
        bunny10,
        bunny11,
        bunny12,
        bunny13,
        bunny14,
        bunny15,
        bunny16,
        bunny17,
        bunny18,
        bunny19,
        bunny20,
        bunny21,
        bunny22,
        bunny23,
        bunny24,
        bunny25,
        bunny26,
        bunny27,
        bunny28,
        bunny29,
        bunny30,
        bunny31,
        bunny32,
        bunny33,
        bunny34,
        bunny35,
        bunny36,
        bunny37,
        bunny38,
        bunny39,
        bunny40
    ])

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
