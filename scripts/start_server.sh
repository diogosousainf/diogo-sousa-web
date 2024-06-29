#!/bin/bash
sudo service httpd start#!/bin/bash
                        isExistApp = `pgrep httpd`
                        if [[ -n  $isExistApp ]]; then
                            sudo service httpd stop
                        fi
