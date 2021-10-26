from app.models import db, ChoreType

def seed_chore_types():
  chore1 = ChoreType(category="Lawn Gardening", chore="Weeding", description="Have weeds in the garden? A bunny can pull them out for you.")
  chore2 = ChoreType(category="Lawn Gardening", chore="Lawn Mowing", description="Need your lawn mowed ? A bunny can chew it away, nice and clean.")
  chore3 = ChoreType(category="Lawn Gardening", chore="Hedge Trimming", description="Those hedges need trimming? Get a bunny to help with that pesky chore.")
  chore4 = ChoreType(category="Lawn Gardening", chore="Watering Plants", description="Going out of town and need someone to water the plants? A bunny can help with that.")
  chore5 = ChoreType(category="Lawn Gardening", chore="Mulching Services", description="Need help with mulching your garden? A bunny can get that mulched up!")
  chore6 = ChoreType(category="House Cleaning", chore="Kitchen", description="Rough day in the kitchen? Get a bunny to clean it nice and tidy.")
  chore7 = ChoreType(category="House Cleaning", chore="House", description="Big party? A bunny can easily clean it up!")
  chore8 = ChoreType(category="House Cleaning", chore="Window Cleaning", description="Dirty windows? A bunny can clean it spick and span.")
  chore9 = ChoreType(category="House Cleaning", chore="Garage Cleaning", description="Need help cleaning your garage? A bunny can assist you with that !")
  chore10 = ChoreType(category="House Cleaning", chore="Car Cleaning", description="Dirty car? A bunny can get it spick and span.")
  chore11 = ChoreType(category="Assembly", chore="Ikea", description="Find a bunny that specializes in Ikea furniture. These bunnies can build anything.")
  chore12 = ChoreType(category="Assembly", chore="Shelves", description="Have a shelving project you need done? Find a bunny that can put together any shelving rig. ")
  chore13 = ChoreType(category="Assembly", chore="Bikes", description="Ordered a new bike? Find a bunny that can get you riding in no time.")
  chore14 = ChoreType(category="Assembly", chore="Outdoor Furniture", description="Upping your backyard game? Find a bunny to help you get an oasis put together.")
  chore15 = ChoreType(category="Assembly", chore="Ceiling Fans", description="Need some more circulation? Find a bunny that can get your space fresh. ")
  chore16 = ChoreType(category="Moving Furniture", chore="Beds", description="Find a bunny that can move any kind of bed, big or small.")
  chore17 = ChoreType(category="Moving Furniture", chore="Refridgerator / Freezer", description="You need help moving those big appliances. Find a bunny to make it easier. ")
  chore18 = ChoreType(category="Moving Furniture", chore="Moving Boxes", description="Moving? Organizing? Find a bunny to help you get more time. ")
  chore19 = ChoreType(category="Moving Furniture", chore="Cabinentry/ Shelving", description="Get ready to organize. Find a bunny to help you move closer to your goal. ")
  chore20 = ChoreType(category="Moving Furniture", chore="Miscellaneous", description="Didn't see what you were looking for? Find a bunny who will show up with an open mind.")
  chore21 = ChoreType(category="Electronic Setup", chore="Home Theater", description="Get assistance in setting up your home theater. One of our experienced bunnies can give you a hand!")
  chore22 = ChoreType(category="Electronic Setup", chore="Smart Home", description="Want to make your home more automated? Our experienced bunnies can help you pick out the right devices.")
  chore23 = ChoreType(category="Electronic Setup", chore="Light Installation", description="Installing new light fixtures or replacing a few hard to reach light bulbs? Our bunnies can light up your world.")
  chore24 = ChoreType(category="Electronic Setup", chore="Wiring", description="Need your home rewired? We have a bunny who can get that sorted out.")
  chore25 = ChoreType(category="Electronic Setup", chore="Doorbell Installation", description="Get help installing your new doorbell or replacing old ones. Connect with a bunny today.")
  chore26 = ChoreType(category="Events", chore="Baby Shower", description="Baby on the way? Let one of our bunnies help you plan a memorable shower.")
  chore27 = ChoreType(category="Events", chore="Event Staffing", description="Need some extra staff for an event? Our bunnies are ready to help.")
  chore28 = ChoreType(category="Events", chore="Event Decor", description="Let one of our bunnies create the perfect atmosphere for your next event.")
  chore29 = ChoreType(category="Events", chore="Marketing", description="Our bunnies can help step up your social media game.")
  chore30 = ChoreType(category="Events", chore="Birthdays", description="Need a special event planned? Let one of our bunnies figure out the details for you.")
  chore31 = ChoreType(category="Personal Assistant", chore="Notes", description="Don't have time to take notes and listen to your exciting meetings? Find a bunny to write for you.")
  chore32 = ChoreType(category="Personal Assistant", chore="Scheduling", description="You're to busy to keep a calendar. Find a bunny to help schedule calendar events")
  chore33 = ChoreType(category="Personal Assistant", chore="Driving", description="HOV is best....always.. get a bunny for a plus one!")
  chore34 = ChoreType(category="Personal Assistant", chore="Calling", description="People are calling you all the time because you're too popular? Get someone to answer your calls.")
  chore35 = ChoreType(category="Personal Assistant", chore="Groceries", description="Find a bunny to stock your fridge, shop for little things to make your life more complete.")
  chore36 = ChoreType(category="Pet Care", chore="Feeding", description="Need somone to feed Kujo because you're afraid he's going to eat you? Find a bunny to keep up with his feeding schedule.")
  chore37 = ChoreType(category="Pet Care", chore="Walking", description="Is your pet bored? Find a bunny that will take them for walks.")
  chore38 = ChoreType(category="Pet Care", chore="Grooming", description="Is your pet not looking their best? Find a bunny to come buy and give them a shave.")
  chore39 = ChoreType(category="Pet Care", chore="Playing", description="Is your pet lonely? Find a bunny to be their friend.")
  chore40 = ChoreType(category="Pet Care", chore="Training", description="Did your pet drop out of school in first grade? Find a bunny to tutor them.")

  db.session.add_all([
    chore1,
    chore2,
    chore3,
    chore4,
    chore5,
    chore6,
    chore7,
    chore8,
    chore9,
    chore10,
    chore11,
    chore12,
    chore13,
    chore14,
    chore15,
    chore16,
    chore17,
    chore18,
    chore19,
    chore20,
    chore21,
    chore22,
    chore23,
    chore24,
    chore25,
    chore26,
    chore27,
    chore28,
    chore29,
    chore30,
    chore31,
    chore32,
    chore33,
    chore34,
    chore35,
    chore36,
    chore37,
    chore38,
    chore39,
    chore40
  ])

  db.session.commit()

def undo_chore_types():
    db.session.execute('TRUNCATE chore_types RESTART IDENTITY CASCADE;')
    db.session.commit()
