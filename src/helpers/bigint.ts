export const intArrToBigint = (arr: Uint8Array): bigint => {
  let bits = 8n;

  if (ArrayBuffer.isView(arr)) {
    // Make sure the bits is the correct size
    bits = BigInt(arr.BYTES_PER_ELEMENT * 8);
  } else {
    // Otherwise make the array a Uint8Array
    arr = new Uint8Array(arr);
  }

  let buffered_result = 0n;

  for (const i of arr.values()) {
    const bint = BigInt(i);

    buffered_result = (buffered_result << bits) + bint;
  }

  return buffered_result;
};
