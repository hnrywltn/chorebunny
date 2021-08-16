from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import ChoreType

chore_type_routes = Blueprint('chore_types', __name__)

@chore_types_routes.route('/')
def chore_types():
  chore_types = ChoreType.query.all()
  return {'chore_types': [chore_type.to_dict() for chore_type in chore_types]}
