from app.models import db, Chore

def seed_chores():
  pass

def undo_chores():
    db.session.execute('TRUNCATE chores RESTART IDENTITY CASCADE;')
    db.session.commit()