from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(username='demo', name='Demo User', email='demo@aa.io', password='password', isBunny=True, bio='demo user bio', address='demo street, demo city, DM 12345')
    marnie = User(username='marnie', name='Marnie', email='marnie@aa.io', password='password', isBunny=False, bio='Real name is Connery. Sean Connery.', address='Top Secret')
    bobbie = User(username='bobbie', name='Bobbie Fischerman', email='bobbie@aa.io', password='password', isBunny=False, bio='World Fishing Champion', address='1969')
    bunny2 = User(username="Demo2", email="Demo2@gmail.com", name="Manuel Labor", password="password",isBunny=True, bio="My name isDemo2and I can help you with your chores!", address="2Demo Street")
    bunny3 = User(username="Demo3", email="Demo3@gmail.com", name="Ivan Itchinos", password="password",isBunny=True, bio="My name isDemo3and I can help you with your chores!", address="3Demo Street")
    bunny4 = User(username="Demo4", email="Demo4@gmail.com", name="Ivan Notheridiya", password="password",isBunny=True, bio="My name isDemo4and I can help you with your chores!", address="4Demo Street")
    bunny5 = User(username="Demo5", email="Demo5@gmail.com", name="Mustafa Leek", password="password",isBunny=True, bio="My name isDemo5and I can help you with your chores!", address="5Demo Street")
    bunny6 = User(username="Demo6", email="Demo6@gmail.com", name="Emma Grate", password="password",isBunny=True, bio="My name isDemo6and I can help you with your chores!", address="6Demo Street")
    bunny7 = User(username="Demo7", email="Demo7@gmail.com", name="Annie Versaree", password="password",isBunny=True, bio="My name isDemo7and I can help you with your chores!", address="7Demo Street")
    bunny8 = User(username="Demo8", email="Demo8@gmail.com", name="Tim Midsaylesman", password="password",isBunny=True, bio="My name isDemo8and I can help you with your chores!", address="8Demo Street")
    bunny9 = User(username="Demo9", email="Demo9@gmail.com", name="Mary Krismass", password="password",isBunny=True, bio="My name isDemo9and I can help you with your chores!", address="9Demo Street")
    bunny10 = User(username="Demo10", email="Demo10@gmail.com", name="Patricia Junkins", password="password",isBunny=True, bio="My name isDemo10and I can help you with your chores!", address="10Demo Street")
    bunny11 = User(username="Demo11", email="Demo11@gmail.com", name="Sarah Conner", password="password",isBunny=True, bio="My name isDemo11and I can help you with your chores!", address="11Demo Street")
    bunny12 = User(username="Demo12", email="Demo12@gmail.com", name="Melissa Walker", password="password",isBunny=True, bio="My name isDemo12and I can help you with your chores!", address="12Demo Street")
    bunny13 = User(username="Demo13", email="Demo13@gmail.com", name="Pat Star", password="password",isBunny=True, bio="My name isDemo13and I can help you with your chores!", address="13Demo Street")
    bunny14 = User(username="Demo14", email="Demo14@gmail.com", name="Tommy Lee", password="password",isBunny=True, bio="My name isDemo14and I can help you with your chores!", address="14Demo Street")
    bunny15 = User(username="Demo15", email="Demo15@gmail.com", name="Kate Sterling", password="password",isBunny=True, bio="My name isDemo15and I can help you with your chores!", address="15Demo Street")
    bunny16 = User(username="Demo16", email="Demo16@gmail.com", name="Henry Kim", password="password",isBunny=True, bio="My name isDemo16and I can help you with your chores!", address="16Demo Street")
    bunny17 = User(username="Demo17", email="Demo17@gmail.com", name="Kim Lee", password="password",isBunny=True, bio="My name isDemo17and I can help you with your chores!", address="17Demo Street")
    bunny18 = User(username="Demo18", email="Demo18@gmail.com", name="Allie Wong", password="password",isBunny=True, bio="My name isDemo18and I can help you with your chores!", address="18Demo Street")
    bunny19 = User(username="Demo19", email="Demo19@gmail.com", name="Tim Cook", password="password",isBunny=True, bio="My name isDemo19and I can help you with your chores!", address="19Demo Street")
    bunny20 = User(username="Demo20", email="Demo20@gmail.com", name="Elon Musk", password="password",isBunny=True, bio="My name isDemo20and I can help you with your chores!", address="20Demo Street")
    bunny21 = User(username="Demo21", email="Demo21@gmail.com", name="Jeff Bezoo", password="password",isBunny=True, bio="My name isDemo21and I can help you with your chores!", address="21Demo Street")
    bunny22 = User(username="Demo22", email="Demo22@gmail.com", name="Steve Jobless", password="password",isBunny=True, bio="My name isDemo22and I can help you with your chores!", address="22Demo Street")
    bunny23 = User(username="Demo23", email="Demo23@gmail.com", name="Jamie Dia", password="password",isBunny=True, bio="My name isDemo23and I can help you with your chores!", address="23Demo Street")
    bunny24 = User(username="Demo24", email="Demo24@gmail.com", name="Jordan Diaz", password="password",isBunny=True, bio="My name isDemo24and I can help you with your chores!", address="24Demo Street")
    bunny25 = User(username="Demo25", email="Demo25@gmail.com", name="Taylor Costia", password="password",isBunny=True, bio="My name isDemo25and I can help you with your chores!", address="25Demo Street")
    bunny26 = User(username="Demo26", email="Demo26@gmail.com", name="Robin Stein", password="password",isBunny=True, bio="My name isDemo26and I can help you with your chores!", address="26Demo Street")
    bunny27 = User(username="Demo27", email="Demo27@gmail.com", name="Leah Young", password="password",isBunny=True, bio="My name isDemo27and I can help you with your chores!", address="27Demo Street")
    bunny28 = User(username="Demo28", email="Demo28@gmail.com", name="Doug Stamper", password="password",isBunny=True, bio="My name isDemo28and I can help you with your chores!", address="28Demo Street")
    bunny29 = User(username="Demo29", email="Demo29@gmail.com", name="Patricia Styles", password="password",isBunny=True, bio="My name isDemo29and I can help you with your chores!", address="29Demo Street")
    bunny30 = User(username="Demo30", email="Demo30@gmail.com", name="Mathew Powers", password="password",isBunny=True, bio="My name isDemo30and I can help you with your chores!", address="30Demo Street")
    bunny31 = User(username="Demo31", email="Demo31@gmail.com", name="Ceasar Chavez", password="password",isBunny=True, bio="My name isDemo31and I can help you with your chores!", address="31Demo Street")
    bunny32 = User(username="Demo32", email="Demo32@gmail.com", name="Ingrid Lu", password="password",isBunny=True, bio="My name isDemo32and I can help you with your chores!", address="32Demo Street")
    bunny33 = User(username="Demo33", email="Demo33@gmail.com", name="Shane Walker", password="password",isBunny=True, bio="My name isDemo33and I can help you with your chores!", address="33Demo Street")
    bunny34 = User(username="Demo34", email="Demo34@gmail.com", name="Britney Spears", password="password",isBunny=True, bio="My name isDemo34and I can help you with your chores!", address="34Demo Street")
    bunny35 = User(username="Demo35", email="Demo35@gmail.com", name="Mariah Carey", password="password",isBunny=True, bio="My name isDemo35and I can help you with your chores!", address="35Demo Street")
    bunny36 = User(username="Demo36", email="Demo36@gmail.com", name="Steve Aoki", password="password",isBunny=True, bio="My name isDemo36and I can help you with your chores!", address="36Demo Street")
    bunny37 = User(username="Demo37", email="Demo37@gmail.com", name="Alison Wonderland", password="password",isBunny=True, bio="My name isDemo37and I can help you with your chores!", address="37Demo Street")
    bunny38 = User(username="Demo38", email="Demo38@gmail.com", name="Jessica Simpson", password="password",isBunny=True, bio="My name isDemo38and I can help you with your chores!", address="38Demo Street")
    bunny39 = User(username="Demo39", email="Demo39@gmail.com", name="Laura Ray", password="password",isBunny=True, bio="My name isDemo39and I can help you with your chores!", address="39Demo Street")
    bunny40 = User(username="Demo40", email="Demo40@gmail.com", name="Cassie sing", password="password",isBunny=True, bio="My name isDemo40and I can help you with your chores!", address="40Demo Street")
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
