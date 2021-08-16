from .db import db




class ChoreTypes(db.Model):
    __tablename__ = 'choreTypes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text)
