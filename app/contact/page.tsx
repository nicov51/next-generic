"use client"

import { Box, Typography, TextField, Button, Stack } from "@mui/material";

export default function ContactPage() {
  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 8 },
        maxWidth: "800px",
        mx: "auto",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Contactez-nous
      </Typography>

      <Typography variant="body1" paragraph>
        Spécialiste du plafond tendu, nous sommes à votre écoute.
      </Typography>

      <Stack spacing={2} mt={4}>
        <Typography variant="body1">
          <strong>Nom de l'entreprise :</strong> PlafondDesign
        </Typography>
        <Typography variant="body1">
          <strong>Email :</strong> contact@plafonddesign.fr
        </Typography>
        <Typography variant="body1">
          <strong>Téléphone :</strong> 06 12 34 56 78
        </Typography>
      </Stack>

      <Box component="form" mt={6}>
        <Typography variant="h6" gutterBottom>
          Précisez votre demande :
        </Typography>
        <TextField
          multiline
          fullWidth
          rows={5}
          placeholder="Décrivez votre projet ici..."
          variant="outlined"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Envoyer
        </Button>
      </Box>
    </Box>
  );
}
