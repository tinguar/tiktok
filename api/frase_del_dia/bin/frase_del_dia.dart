import 'dart:convert';
import 'package:http/http.dart' as http;

void main()async {
  final respuesta = await http
      .get(Uri.parse('https://frasedeldia.azurewebsites.net/api/phrase'));

  final jsonData = jsonDecode(respuesta.body);
  final frase = jsonData['phrase'];
  print(frase);
}
