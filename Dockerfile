FROM ubuntu

RUN apt-get update \
        && apt-get install -y \
                sudo \
                bash \
                curl \
                python3 \
		tzdata\
	python3-distutils \
	&& curl -sL https://raw.githubusercontent.com/rupav/candis/develop/get-candis | sudo python3
EXPOSE 5000

CMD ["candis"]
