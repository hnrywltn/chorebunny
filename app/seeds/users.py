from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='demo', name='Demo User', email='demo@aa.io', password='password', isBunny=True, bio='demo user bio', address='demo street, demo city, DM 12345')
    marnie = User(
        username='marnie', name='Marnie', email='marnie@aa.io', password='password', isBunny=False, bio='Real name is Connery. Sean Connery.', address='Top Secret')
    bobbie = User(
        username='bobbie', name='Bobbie Fischerman', email='bobbie@aa.io', password='password', isBunny=False, bio='World Fishing Champion', address='1969')
    bunny1 = User(
        username="Ester La Vista", email="ester1@mail.com", name="Ester La Vista", password="password1", isBunny=True, bio="My name is Ester and I can help you with weeding, cleaning your house, and am great in a garden!", address="123 Sherwood Road")
    bunny2 = User(
        username="Manuel Labor", email="manuel2@mail.com", name="Manuel Labor", password="password2", isBunny=True, bio="My name is Manuel and I can help you with keeping your windows clean and am great in a garden!", address="8113 East College Lane")
    bunny3 = User(
        username="Ivan Itchinos", email="ivan3@mail.com", name="Ivan Itchinos", password="password3", isBunny=True, bio="My name is Ivan and I can help you with anything from car cleaning, putting together your ikea furniture, and lots of other things!", address="860 Wellington St.")
    bunny4 = User(
        username="Ivan Notheridiya", email="ivan4@mail.com", name="Ivan Notheridiya", password="password4", isBunny=True, bio="My name is Ivan and I can help you with putting together your shelving/bikes and am good at moving things!", address="588 SE. Bedford Drive")
    bunny5 = User(
        username="Mustafa Leek", email="mustafa5@mail.com", name="Mustafa Leek", password="password5", isBunny=True, bio="My name is Mustafa and I can help you with getting your backyard set up and putting up ceiling fans!", address="9669 Piper Dr.")
    bunny6 = User(
        username="Emma Grate", email="emma6@mail.com", name="Emma Grate", password="password6", isBunny=True, bio="My name is Emma and I can help you with event help and can also help you get your spaces ready!", address="704 Wild Rose Ave.")
    bunny7 = User(
        username="Annie Versaree", email="annie7@mail.com", name="Annie Versaree", password="password7", isBunny=True, bio="My name is Annie and I can help you with marketing for events but am also an electrician!", address="332 Essex Drive")
    bunny8 = User(
        username="Tim Midsaylesman", email="tim8@mail.com", name="Tim Midsaylesman", password="password8", isBunny=True, bio="My name is Tim and I can help you with sceduling and organization and can also help with electrical work!", address="899 Surrey St.")
    bunny9 = User(
        username="Mary Krismass", email="mary9@mail.com", name="Mary Krismass", password="password9", isBunny=True, bio="My name is Mary and I can help you with driving.... did I mention? I LOVE PETS!", address="9014 Argyle Street")
    bunny10 = User(
        username="Tim Too", email="tim10@mail.com", name="Tim Too", password="password10", isBunny=True, bio="My name is Tim and I can help you with grocery shopping. Did I mention?? I LOVE PETS!", address="112 Andover Drive")
    db.session.add_all([
        demo,
        marnie,
        bobbie,
        bunny1,
        bunny2,
        bunny3,
        bunny4,
        bunny5,
        bunny6,
        bunny7,
        bunny8,
        bunny9,
        bunny10
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
