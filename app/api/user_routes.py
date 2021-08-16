from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def user_delete(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return id

@user_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def user_update(id, data):
    user = User.query.get(id)
    user.name = data.name if data.name else user.name
    user.email = data.email if data.email else user.email
    user.password = data.password if data.password else user.password
    user.isBunny = data.isBunny if data.isBunny else user.isBunny
    user.bio = data.bio if data.bio else user.bio
    user.address = data.address if data.address else user.address
    
    db.session.commit()
    return user.to_dict()