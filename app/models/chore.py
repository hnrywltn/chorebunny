from .db import db


class Chore(db.Model):
    __tablename__ = 'chores'

    id = db.Column(db.Integer, primary_key=True)
    bunnyId = db.Column(db.Integer, db.ForeignKey('users.id'))
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    choreId = db.Column(db.Integer, db.ForeignKey('chore_types.id'))
    bunnyComplete = db.Column(db.Boolean)
    userComplete = db.Column(db.Boolean)
    address = db.Column(db.String(250), nullable=False)
    detail = db.Column(db.Text)
    total = db.Column(db.Float)

    def to_dict(self):
        return{
            'id': self.id,
            'bunnyId': self.bunnyId,
            'userId': self.userId,
            'choreId': self.choreId,
            'bunnyComplete': self.bunnyComplete,
            'userComplete': self.userComplete,
            'address': self.address,
            'detail': self.detail,
            'total': self.total,
        }
