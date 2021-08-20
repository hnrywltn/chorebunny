from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired
# from app.models import Pricing

class PricingForm(FlaskForm):
  userId = IntegerField('userId', validators=[DataRequired()])
  choreId = IntegerField('choreId', validators=[DataRequired()])
  rate = IntegerField('rate', validators=[DataRequired()])
