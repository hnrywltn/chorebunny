from .db import db




class Pricing(db.Model):
    __tablename__ = 'pricings'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    choreId = db.Column(db.Integer, db.ForeignKey('chore_types.id'), nullable=False)
    rate = db.Column(db.Float, nullable=False)


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'choreId': self.choreId,
            'rate': self.rate
        }
