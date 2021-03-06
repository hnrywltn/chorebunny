from flask.cli import AppGroup
from .users import seed_users, undo_users
# import add user function
from .chore_types import seed_chore_types, undo_chore_types
from .chores import seed_chores, undo_chores
from .prices import seed_pricings, undo_pricings

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_chore_types()
    seed_chores()
    seed_pricings()
    

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_chore_types()
    undo_chores()
    undo_pricings()
