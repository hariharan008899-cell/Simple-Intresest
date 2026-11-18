#!/usr/bin/env bash

set -euo pipefail

read -r -p "Enter principal amount: " principal
read -r -p "Enter annual rate of interest (%): " rate
read -r -p "Enter time period (years): " time

# Accept non-negative decimal values only.
number_re='^[0-9]+([.][0-9]+)?$'
for name in principal rate time; do
  value=${!name}
  if [[ ! $value =~ $number_re ]]; then
    printf 'Error: %s must be a non-negative number.\n' "$name" >&2
    exit 1
  fi
done

awk -v principal="$principal" -v rate="$rate" -v time="$time" 'BEGIN {
  interest = principal * rate * time / 100
  total = principal + interest
  printf "Simple interest: %.2f\n", interest
  printf "Total amount: %.2f\n", total
}'
