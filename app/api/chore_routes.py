from flask import Blueprint, request
from flask_login import login_required
from app.models import Chore, db
from app.forms import ChoreForm
from .auth_routes import validation_errors_to_error_messages

chore_routes = Blueprint('chores', __name__)


@chore_routes.route('/')
def chore():
    chores = Chore.query.all()
    return {'chores': [chore.to_dict() for chore in chores]}


@chore_routes.route('/', methods=['POST'])
# @login_required
def create_chore():
    form = ChoreForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        chore = Chore(
            bunnyId=form.data['bunnyId'],
            userId=form.data['userId'],
            choreId=form.data['choreId'],
            # bunnyComplete=form.data['bunnyComplete'],
            # userComplete=form.data['userComplete'],
            address=form.data['address'],
            detail=form.data['detail'],
            total=form.data['total']
        )
        db.session.add(chore)
        db.session.commit()
        return chore.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@chore_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def chore_delete(id):
    chore = Chore.query.get(id)
    db.session.delete(chore)
    db.session.commit()
    return {'message': id}


@chore_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def chore_update(id):
    data = request.json
    print("PRINT ME SUM DEETA", data)
    chore = Chore.query.get(id)
    print("PRINT ME A CHORE", chore)

    # chore['address'] = data['address'] if data['address'] else chore['address']
    # chore['detail'] = data['detail'] if data['detail'] else chore['detail']
    chore.bunnyComplete = data['bunnyComplete'] if data['bunnyComplete'] else chore.bunnyComplete
    chore.userComplete = data['userComplete'] if data['userComplete'] else chore.userComplete

    if chore.userComplete or chore.bunnyComplete:
        chore.userComplete = chore.bunnyComplete = True

    # db.session.add(chore)
    db.session.commit()
    return {'message': id}
