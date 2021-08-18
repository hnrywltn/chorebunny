from flask import Blueprint, request
from flask_login import login_required
from app.models import Pricing, db
from app.forms import PricingForm
from .auth_routes import validation_errors_to_error_messages

pricing_routes = Blueprint('pricings', __name__)

@pricing_routes.route('/')
@login_required
def pricing():
  pricing = Pricing.query.all()
  return {'pricing': [price.to_dict() for price in pricing] }

@pricing_routes.route('/', methods=['POST'])
@login_required
def pricing_create():
  form = PricingForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    price = Pricing(
      userId = form.data['user_id'],
      choreId = form.data['chore_id'],
      rate = form.data['rate']
    )
  db.session.add(price)
  db.session.commit()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@pricing_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def pricing_delete(id):
  price = Pricing.query.get(id)
  db.session.delete(price)
  db.session.commit()
  return id

@pricing_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def pricing_update(id):
  data = request.json
  price = Pricing.query.get(id)

  price.userId = data['userId'] if data['userId'] else price.userId
  price.choreId = data['choreId'] if data['choreId'] else price.choreId
  price.rate = data['rate'] if data['rate'] else price.rate

  db.session.add(price)
  db.session.commit()
  return price