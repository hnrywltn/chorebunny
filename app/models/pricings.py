from .db import db




class Pricing(db.Model):
    __tablename__ = 'pricings'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    choreId = db.Column(db.Integer, db.ForeignKey('choreTypes.id'), nullable=False)
    rate = db.Column(db.Float, nullable=False)
