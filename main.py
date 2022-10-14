import eel

eel.init('web')


@eel.expose
def get_data():
    return 'This data came from python!'


@eel.expose
def send_data(msg):
    print(msg)


eel.start('index.html', mode='my_portable_chromium',
          host='localhost',
          port=27000,
          block=True)
