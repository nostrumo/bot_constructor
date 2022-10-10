import json

from django.shortcuts import render, get_object_or_404
from .models import *


def projects_page(request):
    bots = Bots.objects.all()
    return render(request, 'bot_list.html', {'bots': bots})


def project(request, id):
    bot_uuid = get_object_or_404(Bots, id=id)
    return render(request, 'dashboard_page.html', {'bots': bot_uuid})


def project_edit(request, id):
    bot_uuid = get_object_or_404(Bots, id=id)
    return render(request, 'new_bot.html', {'bots': bot_uuid})


def price_page(request):
    price = Bots.objects.all()
    return render(request, 'pricing.html', {'price': price})


def new_bot(request):
    data = {
        1: {
            "screen_name": "Hello",
            "components": {
                "bot_message": [{
                    "data_type": "text_data",
                    "content_data": [
                        "Text1",
                        "Text2"
                    ]
                },
                    {
                        "data_type": "text_data",
                        "content_data": [
                            "Text1_2",
                            "Text2_2"
                        ]
                    }],
                "person_message": {
                    "data_type": "intent_data",
                    "content_data": [{'connection': {'child_screen': 2, 'connection_type': 'screen'}, 'data': [
                        {'content_data': "Text1_user", 'content_type': "example"},
                        {'content_data': "Text4_user", 'content_type': "example"},
                        {'content_data': "Text2_user", 'content_type': "template"},
                    ]}, {'connection': {'child_screen': 2, 'connection_type': 'screen'}, 'data': [
                        {'content_data': "Text1_user", 'content_type': "example"},
                        {'content_data': "Text2_user", 'content_type': "template"},
                    ]}, {'connection': {'child_screen': 1, 'connection_type': 'screen'}, 'data': [
                        {'content_data': "Any other feedback", 'content_type': "else"},
                    ]}
                                     ]
                },
                "keyboard": [
                    {
                        "key_name": "keytext",
                        "connection": 1
                    },
                    {
                        "key_name": "keytext 2",
                        "connection": 1
                    }
                ]
            }
        },2: {
            "screen_name": "Hell",
            "components": {
                "bot_message": [{
                    "data_type": "text_data",
                    "content_data": [
                        "Text1",
                        "Text2"
                    ]
                },
                    {
                        "data_type": "text_data",
                        "content_data": [
                            "Text1_2",
                            "Text2_2"
                        ]
                    }],
                "person_message": {
                    "data_type": "intent_data",
                    "content_data": [{'connection': {'child_screen': 2, 'connection_type': 'screen'}, 'data': [
                        {'content_data': "Text1_user", 'content_type': "example"},
                        {'content_data': "Text4_user", 'content_type': "example"},
                        {'content_data': "Text2_user", 'content_type': "template"},
                    ]}, {'connection': {'child_screen': 2, 'connection_type': 'screen'}, 'data': [
                        {'content_data': "Text1_user", 'content_type': "example"},
                        {'content_data': "Text2_user", 'content_type': "template"},
                    ]}, {'connection': {'child_screen': 1, 'connection_type': 'screen'}, 'data': [
                        {'content_data': "Any other feedback", 'content_type': "else"},
                    ]}
                                     ]
                },
                "keyboard": [
                    {
                        "key_name": "keytext",
                        "connection": 1
                    },
                    {
                        "key_name": "keytext 2",
                        "connection": 1
                    }
                ]
            }
        }, 3: {
            "screen_name": "Hi",
            "components": {
                "bot_message": [{
                    "data_type": "text_data",
                    "content_data": [
                        "Text1",
                        "Text2"
                    ]
                }, {
                    "data_type": "text_data",
                    "content_data": [
                        "Text1_2",
                        "Text2_2"
                    ]
                }],
                "person_message": {
                    "data_type": "intent_data",
                    "content_data": [{'connection': {'child_screen': 2, 'connection_type': 'screen'}, 'data': [
                        {'content_data': "Text1_user", 'content_type': "example"},
                        {'content_data': "Text2_user", 'content_type': "template"},
                    ]}, {'connection': {'child_screen': 2, 'connection_type': 'screen'}, 'data': [
                        {'content_data': "Text1_user", 'content_type': "example"},
                        {'content_data': "Text2_user", 'content_type': "template"},
                    ]}
                                     ]
                },
                "keyboard": [
                    {
                        "key_name": "keytext",
                        "connection": 1
                    },
                    {
                        "key_name": "keytext 2",
                        "connection": 1
                    }
                ]
            }
        },
    }
    return render(request, 'new_bot.html', {'bot_structure': 0, 'form_data': data})


def profile(request):
    return render(request, 'profile.html')
# Create your views here.
