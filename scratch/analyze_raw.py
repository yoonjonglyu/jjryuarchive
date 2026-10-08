with open("scratch/info_raw.bin", "rb") as f:
    raw = f.read()

print("Hex around <h1><span id=\"infoTitle\">:")
idx = raw.find(b'infoTitle')
if idx != -1:
    snippet = raw[idx:idx+100]
    print("Bytes:", snippet)
    for enc in ['cp949', 'euc-kr', 'utf-8', 'utf-16', 'iso-8859-1']:
        try:
            print(f"{enc}: {snippet.decode(enc)}")
        except Exception as e:
            print(f"{enc} failed: {e}")
