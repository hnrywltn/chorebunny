from flask_wtf import FlaskForm
from wtforms import BooleanField
from wtforms.validators import DataRequired, ValidationError
from app.models import User


class EditBunny(FlaskForm):
    isBunny = BooleanField('isBunny')