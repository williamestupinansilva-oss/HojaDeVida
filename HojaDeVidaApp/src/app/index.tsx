
import { Ionicons } from '@expo/vector-icons';
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MiBoton from '../components/MiBoton';

const mostrarAlerta = (titulo: string, mensaje: string) => {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje);
  }
};

export default function Inicio() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.avatarContenedor}>
        <Ionicons
          name="person-circle"
          size={100}
          color="#2563eb"
        />

        <Text style={estilos.nombre}>
          William Estupiñan
        </Text>

        <Text style={estilos.profesion}>
          Aprendiz de Análisis y Desarrollo de Software (ADSO)
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>
          Perfil Profesional
        </Text>

        <Text style={estilos.parrafo}>
          Desarrollador de software en formación, con conocimientos en desarrollo backend, administración y diseño de bases de datos y desarrollo de APIs REST. Tengo experiencia académica trabajando con tecnologías como Python, JavaScript, Node.js, Express.js, FastAPI y PostgreSQL.

            Poseo fundamentos en lógica de programación, arquitectura y estructuración de aplicaciones, así como en gestión y manipulación de datos. He participado en proyectos académicos orientados a la creación de soluciones de software, aplicando principios de organización, eficiencia y buenas prácticas de desarrollo.

            Me caracterizo por mi disposición para aprender, mejorar continuamente mis habilidades técnicas y afrontar nuevos retos. Tengo especial interés en el desarrollo backend y en la construcción de aplicaciones eficientes, escalables y fáciles de mantener.
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto</Text>

        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#E86D64"
          onPress={() =>
            Alert.alert(
              'Contacto por correo',
              'Correo: williamestupinansilva@gmail.com'
            )
          }
        />

        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#16A34A"
          onPress={() =>
            Alert.alert(
              'Contacto',
              'Teléfono: 3108505642'
            )
          }
        />

        <MiBoton
          textoBoton="Repositorio Git"
          nombreIcono="logo-github"
          colorBoton="#171717"
          onPress={() =>
            Alert.alert(
              'Repositorio Git',
              'Aquí puedes consultar mis proyectos y trabajos de programación. https://github.com/williamestupinansilva-oss/HojaDeVida.git'
            )
          }
        />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  contenido: {
    padding: 20,
  },
  avatarContenedor: {
    alignItems: 'center',
    marginBottom: 20,
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 8,
    textAlign: 'center',
  },
  profesion: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  seccion: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  parrafo: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
});
