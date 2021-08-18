from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired
# from app.models import Pricing

class PricingForm(FlaskForm):
  user_id = IntegerField('address_id', validators=[DataRequired()])
  chore_id = IntegerField('chore_id', validators=[DataRequired()])
  rate = IntegerField('rate', validators=[DataRequired()])