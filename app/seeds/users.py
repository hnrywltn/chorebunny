from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='demo',
        name='Demo User',
        email='demo@aa.io',
        password='password',
        isBunny=True,
        bio='demo user bio',
        address='demo street, demo city, DM 12345'
    )
    marnie = User(
        username='marnie',
        name='Marnie',
        email='marnie@aa.io',
        password='password',
        isBunny=False,
        bio='Real name is Connery. Sean Connery.',
        address='Top Secret'
    )
    bobbie = User(
        username='bobbie',
        name='Bobbie Fischerman',
        email='bobbie@aa.io',
        password='password',
        isBunny=False,
        bio='World Fishing Champion',
        address='1969'
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
