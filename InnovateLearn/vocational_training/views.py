from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required
def index(request):
    return render(request, 'vocational_training/index.html')



def level(request, level_name):
    # Logic to render the appropriate level template based on the level_name parameter
    # You can implement different logic based on the level_name to render different templates or perform different actions
    template_name = f'vocational_training/{level_name}.html'
    return render(request, template_name, {'level': level_name.capitalize()})


def random_letters(request):
    return render(request, 'vocational_training/level.html', {'level': 'random letters'})
# views.py



def basic_words(request):
    return render(request, 'vocational_training/basic_words.html', {'level': 'Basic Words'})


def send_test_email(request):
    # Your view logic to send a test email
    return render(request, 'vocational_training/send_test_email.html')
