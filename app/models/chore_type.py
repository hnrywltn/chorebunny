from .db import db


class ChoreType(db.Model):
    __tablename__ = 'chore_types'

    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(50), nullable=False)
    chore = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text)
