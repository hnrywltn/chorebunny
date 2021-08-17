from flask_wtf import FlaskForm
from wtforms import (
    StringField, TextAreaField
)
from wtforms.validators import DataRequired
# from app.models import Chore

class ChoreForm(FlaskForm):
  address = StringField('address', validators=[DataRequired()])
  detail = TextAreaField('detail', validators=[DataRequired()])