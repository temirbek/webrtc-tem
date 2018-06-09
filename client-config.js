var peerConnectionConfig = {
    'iceServers': [
        {'urls': 'stun:stun.services.mozilla.com'},
        {'urls': 'stun:stun.l.google.com:19302'},
        {'username':'mackostr_at_man.poznan.pl','credential':'LxuMjwNwP9Y7vH5CmCJ3qfepKf7DaG8K','urls': 'turn:ltc.turn.geant.org:3478?transport=tcp'},
        {'username':'mackostr_at_man.poznan.pl','credential':'LxuMjwNwP9Y7vH5CmCJ3qfepKf7DaG8K','urls': 'turn:ltc.turn.geant.org:3478?transport=udp'},
    ]
}
