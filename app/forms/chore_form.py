from flask_wtf import FlaskForm
from wtforms import (
    StringField, TextAreaField, FloatField, IntegerField
)
from wtforms.fields.core import FloatField
from wtforms.validators import DataRequired
# from app.models import Chore


class ChoreForm(FlaskForm):
    bunnyId = IntegerField('bunnyId')
    userId = IntegerField('userId')
    choreId = IntegerField('choreId')
    address = StringField('address', validators=[DataRequired()])
    detail = TextAreaField('detail', validators=[DataRequired()])
    total = FloatField('total')
